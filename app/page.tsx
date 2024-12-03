import Header from "./components/header/header";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Divider from "./components/Divider";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/contact-us";
import Footer from "./components/Footer";
import PolicyCookies from "./components/cookies/Policy-cookies";

export default function Home() {
  return (
    <div className="w-full main-bg">
      <Header />
      <div
        className="pt-[80px]" // Add padding-top matching header height
      >
        <Banner />

        <AboutUs />

        <WhyUs />

        <Testimonials />

        <FAQ />

        <ContactUs />
        <Footer />
        <PolicyCookies />
      </div>
    </div>
  );
}
