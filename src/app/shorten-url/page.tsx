import UrlShortener from "./components/UrlShortner";

const ShortenUrl = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#fff] p-6">
      <UrlShortener />
    </div>
  );
};

export default ShortenUrl;