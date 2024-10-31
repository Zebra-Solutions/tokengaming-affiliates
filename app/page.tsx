import Header from "./components/header/header";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import FAQ from "./components/FAQ";
import Divider from "./components/Divider";
import Join from "./components/Join";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="bg-gray-900">
        {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
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
        <Divider  />
        <Footer/>
        {/* </div> */}
      </div>
    </>
  );
}
