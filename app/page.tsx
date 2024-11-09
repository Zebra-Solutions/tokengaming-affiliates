import Header from "./components/header/header";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Divider from "./components/Divider";
import Join from "./components/Join";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/contact-us";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div
        className="bg-[#161617] pt-[80px]" // Add padding-top matching header height
      >
        <Join />
        <AboutUs />
        <Divider />
        <WhyUs />
        <Divider reverse />
        <Testimonials />
        <Divider />
        <FAQ />
        <Divider reverse />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
