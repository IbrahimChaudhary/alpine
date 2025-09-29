import SonicSpecificationsExample from "@/components/sections/sonic-specifications-example";
import { DiscountCta } from "@/components/sections/discount-cta";
export default function SpecificationsPage() {
  return (
    <div className="min-h-screen">
      <SonicSpecificationsExample />
      <DiscountCta/>
    </div>
  );
}