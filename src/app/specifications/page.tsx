import { DiscountCta } from "@/components/discount-cta";
import SonicSpecificationsExample from "@/components/sonic-specifications-example";

export default function SpecificationsPage() {
  return (
    <div className="min-h-screen">
      <SonicSpecificationsExample />
      <DiscountCta/>
    </div>
  );
}