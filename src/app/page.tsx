import Menu from "@/components/menu";
import Work from "./home/components/work";
import About from "./home/components/about";
import ContactMe from "./home/components/contact-me";
import Footer from "@/components/footer";

export default function Home() {
  //TO-DO
  // 1. Close language switcher when click outside
  // 2. Fix menu anchor
  // 3. Horizontal scroll

  return (
    <>
      <Menu />
      <Work />
      <About />
      <ContactMe />
      <Footer />
    </>
  );
}
