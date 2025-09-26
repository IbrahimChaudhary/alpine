import ProductSpecifications from "./product-specifications";
import { Zap, Lightbulb,Radio , Ruler, Scale  } from "lucide-react";

// Example usage with the Sonic device specifications from the screenshots
export default function SonicSpecificationsExample() {
  const sonicSpecifications = [
    {
      title: "General",
      items: [
        {
          label: "Operating Voltage",
          value: "12V (10 - 15V DC)",
          icon: <Zap className="w-[24px] h-[24px] " />,
        },
        {
          label: "Power Consumption",
          value: "10W (Idle), 30W (Max)",
          icon: <Lightbulb className="w-[24px] h-[24px]" />,
        },
        {
          label: "Frequency Response",
          value: "60 - 20,000 Hz",
          icon: <Radio  className="w-[24px] h-[24px]" />,
        },
        {
          label: "Dimensions (WxHxD)",
          value: "180 x 95 x 95 mm",
          icon: <Ruler className="w-[24px] h-[24px]" />,
        },
        {
          label: "Weight",
          value: "890 g",
          icon: <Scale  className="w-[24px] h-[24px]" />,
        },
      ],
    },
    {
      title: "Audio Inputs Outputs",
      items: [
        {
          label: "Bluetooth (Wireless Audio)",
          value: "2x",
        
        },
        {
          label: "AUX Input (Stereo Analog)",
          value: "1x",
         
        },
        {
          label: "USB-C (Charging & Data)",
          value: "1x",
        
        },
      ],
    },
    {
      title: "Battery Connectivity",
      items: [
        {
          label: "Battery Life",
          value: "Up to 12 hours (Playback at 70% volume)",
         
        },
        {
          label: "Charging Time",
          value: "Approx. 2.5 hours",
         
        },
        {
          label: "Wireless Range",
          value: "Up to 15 meters",
         
        },
        {
          label: "Connectivity",
          value: "Bluetooth, USB-C, AUX",
       
        },
      ],
    },
    {
      title: "Environmental",
      items: [
        {
          label: "Operating Temperature",
          value: "0° - 45° C (32° - 113° F)",
        
        },
        {
          label: "Storage Temperature",
          value: "-10° - 60° C (14° - 140° F)",
         
        },
        {
          label: "Water Resistance",
          value: "IPX5 Rated (Splash-Proof)",
        
        },
      ],
    },
    {
      title: "Certifications",
      items: [
        {
          label: "Safety",
          value: "Compliant with IEC/EN 62368-1",
       
        },
        {
          label: "Certificate",
          value: "RoHS & CE Certified",
   
        },
      ],
    },
  ];

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