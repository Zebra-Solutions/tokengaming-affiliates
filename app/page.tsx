import Header from "./components/header/header";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Divider from "./components/Divider";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/contact-us";
import Footer from "./components/Footer";
import BannerCarousel from "./components/BannerCarousel";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div
        className="bg-[#161617] pt-[80px]" // Add padding-top matching header height
      >
        <Banner />
        <BannerCarousel/>
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
