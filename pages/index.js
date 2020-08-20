import Layout from "../components/utils/Layout";
import Hero from "../components/utils/Hero";
import Services from "../components/utils/Services";
import img from "../images/mainBcg.jpeg";

export default function Home() {
  return (
    <Layout>
      <Hero
        title={"awesome Products awesome Prices"}
        max={true}
        img={img}
        link={{ name: "our products", path: "/products" }}
      />
      <Services />
    </Layout>
  );
}
