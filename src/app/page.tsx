import Menu from "@/components/menu";
import Work from "./home/components/work";
import About from "./home/components/about";

export default function Home() {
  return (
    <>
      <Menu />
      <Work />
      <About />
      {/* <LanguageSwitcher /> */}
    </>
  );
}
