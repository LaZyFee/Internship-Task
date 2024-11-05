import About from "./About/About";
import BookForm from "./Book/BookForm";
import Hero from "./Hero/hero";
import CarouselCard from "./Popular/CarouselCard";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CarouselCard />
      <BookForm />
    </>
  );
}

export default HomePage;
