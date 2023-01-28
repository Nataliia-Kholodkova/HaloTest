import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Layout withHero>
        <Hero />
        <Team />
      </Layout>
    </>
  );
}
