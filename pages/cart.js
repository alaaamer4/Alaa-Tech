import Hero from "../components/utils/Hero";
import Layout from "../components/utils/Layout";
import img from "../images/store.jpg";
import Cart from "../components/cart/Cart";
export default function CartPage() {
  return (
    <Layout>
      <Hero img={img} />
      <Cart />
    </Layout>
  );
}
