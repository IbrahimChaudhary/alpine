import { SpecificationSection } from '@/types';

export const sonicSpecifications: SpecificationSection[] = [
  {
    title: "General",
    items: [
      {
        label: "Operating Voltage",
        value: "12V (10 - 15V DC)",
        icon: "Zap",
      },
      {
        label: "Power Consumption",
        value: "10W (Idle), 30W (Max)",
        icon: "Lightbulb",
      },
      {
        label: "Frequency Response",
        value: "60 - 20,000 Hz",
        icon: "Radio",
      },
      {
        label: "Dimensions (WxHxD)",
        value: "180 x 95 x 95 mm",
        icon: "Ruler",
      },
      {
        label: "Weight",
        value: "890 g",
        icon: "Scale",
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