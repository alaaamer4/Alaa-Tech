import Hero from "../components/utils/Hero";
import Layout from "../components/utils/Layout";
import img from "../images/aboutBcg.jpeg";
import InfoSection from "../components/utils/InfoSection";
export default function About() {
  return (
    <Layout>
      <Hero title={"who are we"} img={img} />
      <InfoSection title={"about us"} />
    </Layout>
  );
}
