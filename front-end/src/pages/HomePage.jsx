import HeroSection from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import BestSeller from "../components/BestSeller";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SectionTwo />
      {/* <SectionThree /> */}
      <BestSeller />
    </div>
  );
}
export default HomePage;
