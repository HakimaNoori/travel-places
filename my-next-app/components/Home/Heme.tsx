import Destination from "./Destination/Destination";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import News from "./News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import Review from "./Review/Review";
import WhyChoose from "./WhyChoose/WhyChoose";

const Heme = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <News />
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default Heme;
