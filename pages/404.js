import Hero from "../components/utils/Hero";
import Layout from "../components/utils/Layout";
import img from "../images/error.svg";
export default function Custom404() {
  return (
    <Layout>
      <Hero
        img={img}
        link={{ name: "go to home page", path: "/" }}
        max={true}
        contain={true}
      />
    </Layout>
  );
}
