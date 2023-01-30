import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import GetStarted from "@/components/GetStarted";
import GetStartedReady from "@/components/GetStartedReady";

export default function PlacesPage() {
  return (
    <>
      <Layout>
        <Hero />
        <GetStarted />
        <GetStartedReady />
      </Layout>
    </>
  );
}
