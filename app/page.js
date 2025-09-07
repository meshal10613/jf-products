import Image from "next/image";
import Trusted from "./components/Trusted";
import WhyUs from "./components/WhyUs";
import QualityProducts from "./components/QualityProducts";

export default function Home() {
  return (
    <div>
      <Trusted/>
      <WhyUs/>
      <QualityProducts/>
    </div>
  );
}