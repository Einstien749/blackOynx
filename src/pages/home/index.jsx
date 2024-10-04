import "./index.css";
import ContactUsSection from "./components/contactus";
import WhyChooseUsSection from "./components/whychooseus/index.jsx";
import CompanyProfileSection from "./components/companyprofile/index.jsx";
import PartnersSection from "./components/partners/index.jsx";
import HeaderSection from "./components/headers/index.jsx";

function Home() {
  return (
    <div className="">
      <HeaderSection />
      <PartnersSection />
      <CompanyProfileSection />
      <WhyChooseUsSection />
      <ContactUsSection />
    </div>
  );
}

export default Home;
