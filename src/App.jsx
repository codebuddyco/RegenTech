import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

const path = window.location.pathname.replace(/\/$/, "");

export default function App() {
  if (path === "/polityka-prywatnosci") {
    return <PrivacyPolicy />;
  }

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <Process />
      <Contact />
      <Gallery />
      <Footer />
      <CookieBanner />
    </>
  );
}
