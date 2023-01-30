import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import GetStarted from "@/components/GetStarted";
import GetStartedReady from "@/components/GetStartedReady";
import NatureSlider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Layout withHero>
        <Hero />
        <Team />
        <GetStarted />
        <GetStartedReady />
        <NatureSlider />
      </Layout>
    </>
  );
}
