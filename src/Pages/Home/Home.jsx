import BlackBox from "../../Components/BlackBox/BlackBox";
import HeroSection from "../../Components/HeroSection/HeroSection";
import SpecialSlider from "../../Components/SpecialSlider/SpecialSlider";
import AboutShop from "../../Components/AboutShop/AboutShop";
import CoustomCoffe from "../../Components/CoustomCoffe/CoustomCoffe";
import LastArticle from "../../Components/LastArticle/LastArticle";

function Home() {
  return (
    <>
      <HeroSection />
      <BlackBox />
      <div className="md:w-[1327px] mx-auto">
        <SpecialSlider />
      </div>
      <AboutShop />
      <CoustomCoffe />
      <LastArticle />
    </>
  );
}

export default Home;
