import Image from "next/image";
import Trusted from "./components/Trusted";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div>
      <Trusted/>
      <WhyUs/>
    </div>
  );
}