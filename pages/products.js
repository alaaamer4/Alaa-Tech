import Hero from "../components/utils/Hero";
import Layout from "../components/utils/Layout";
import img from "../images/singleProductBcg.jpeg";
export default function Product() {
  return (
    <Layout>
      <Hero img={img} />
    </Layout>
  );
}
