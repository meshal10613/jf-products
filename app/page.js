import Image from "next/image";
import Trusted from "./components/Trusted";
import WhyUs from "./components/WhyUs";
import QualityProducts from "./components/QualityProducts";
import ProductSlider from "./components/ProductSlider";
import ProductSlider2 from "./components/ProductSlider2";

export default function Home() {
  return (
    <div>
      <ProductSlider/>
      <ProductSlider2/>
      <Trusted/>
      <WhyUs/>
      <QualityProducts/>
    </div>
  );
}