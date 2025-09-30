const fs = require('fs');
const path = require('path');

// Read registry configuration
const configPath = path.join(process.cwd(), 'registry-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Ensure output directory exists
const outputDir = path.join(process.cwd(), 'public', 'r');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to read file content
function readFileContent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: File not found: ${filePath}`);
    return null;
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

// Function to extract component name from path
function getComponentName(filePath) {
  return path.basename(filePath, path.extname(filePath));
}

// Function to convert file path to registry path format
function toRegistryPath(filePath) {
  // Convert: src/components/sections/hero-section.tsx
  // To: components/sections/hero-section.tsx (remove 'src' folder)
  return filePath.replace(/^src\//, '');
}

// Function to clean imports - remove relative imports to make components more standalone
function cleanImports(content, componentPath) {
  // Replace @/ imports with relative paths based on the component location
  let cleanedContent = content;

  // For components in sections, adjust UI imports
  if (componentPath.includes('sections/')) {
    cleanedContent = cleanedContent.replace(/@\/components\/ui\//g, '../ui/');
  }

  // Clean up any other local imports that might cause issues
  return cleanedContent;
}

// Build registry for each block
config.blocks.forEach(block => {
  console.log(`Building registry for: ${block.name}`);

  const files = [];

  // Add main component
  const mainContent = readFileContent(block.mainComponent);
  if (mainContent) {
    files.push({
      path: toRegistryPath(block.mainComponent),
      content: cleanImports(mainContent, block.mainComponent),
      type: "registry:component",
      target: toRegistryPath(block.mainComponent)
    });
  }

  // Add all dependency components
  block.dependencies.forEach(depPath => {
    const content = readFileContent(depPath);
    if (content) {
      files.push({
        path: toRegistryPath(depPath),
        content: cleanImports(content, depPath),
        type: "registry:component",
        target: toRegistryPath(depPath)
      });
    }
  });

  // Create registry object following shadcn/ui schema
  const registry = {
    "$schema": "https://ui.shadcn.com/schema/registry-item.json",
    "name": block.name,
    "type": "registry:block",
    "title": block.title,
    "description": block.description,
    "dependencies": block.npmDependencies || [],
    "devDependencies": [],
    "registryDependencies": block.registryDependencies || [],
    "files": files,
    "tailwind": {
      "config": {
        "theme": {
          "extend": {}
        }
      }
    },
    "meta": {
      "description": block.description,
      "source": `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/r/${block.name}.json`
    }
  };

  // Write registry file
  const outputPath = path.join(outputDir, `${block.name}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));
  console.log(`✓ Created: ${outputPath}`);
});

console.log('\n✨ Registry build complete!');
console.log(`\n📁 Generated ${config.blocks.length} registry files in public/r/`);
console.log('\nTo use in your components:');
config.blocks.forEach(block => {
  console.log(`  <V0Button registryName="${block.name}" /> // ${block.title}`);
});