import ProductSpecifications from "./product-specifications";
import { sonicSpecifications } from "@/data/specifications";

export default function SonicSpecificationsExample() {

  return (
    <ProductSpecifications
      title="Product Details"
      subtitle="Behind every field is smart engineering—dive into the full list of features that power your Sonic experience."
      productImage={{
        src: "/specifications-1.webp", // Replace with actual image path
        alt: "Sonic Audio Device",
      }}
      specifications={sonicSpecifications}
    />
  );
}