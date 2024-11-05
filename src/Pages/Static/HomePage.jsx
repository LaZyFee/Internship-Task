import About from "./About/About.jsx";
import BookForm from "./Book/BookForm.jsx";
import Footer from "./Footer/Footer.jsx";
import Hero from "./Hero/Hero.jsx";
import CarouselCard from "./Popular/CarouselCard.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CarouselCard />
      <BookForm />
      <Footer />
    </>
  );
}

export default HomePage;
