import Hero from "../components/utils/Hero";
import Layout from "../components/utils/Layout";
import img from "../images/contactBcg.jpeg";
import ContactForm from "../components/utils/ContactForm";
export default function Contact() {
  return (
    <Layout>
      <Hero title={"let us know what you think"} img={img} />
      <ContactForm />
    </Layout>
  );
}
