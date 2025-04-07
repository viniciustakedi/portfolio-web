import Menu from "@/components/menu";
import Work from "./home/components/work";
import About from "./home/components/about";
import ContactMe from "./home/components/contact-me";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Menu />
      <Work />
      <About />
      <ContactMe />
      <Footer />
      {/* <LanguageSwitcher /> */}
    </>
  );
}
