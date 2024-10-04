import "./index.css";
import VisionSection from "./components/vision";
import OverviewSection from "./components/overview";

function About() {
  return (
    <div className="about">
      <OverviewSection />
      <VisionSection />
    </div>
  );
}

export default About;
