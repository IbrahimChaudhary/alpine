import SonicSpecificationsExample from "@/components/sections/sonic-specifications-example";
import { AlpineV0Menu } from "@/components/AlpineV0Menu";
import { DiscountCta } from "@/components/sections/discount-cta";

export default function SpecificationsPage() {
  return (
    <div className="min-h-screen">
      {/* V0 Menu Button */}
      <AlpineV0Menu page="specifications" />

      <SonicSpecificationsExample />
      <DiscountCta/>
    </div>
  );
}