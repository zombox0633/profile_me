import Banner from "./section/Banner";
import Contact from "./section/Contact";
import Educational from "./section/Educational";
import Profile from "./section/Profile";
import Skills from "./section/Skills";

type MainContent = {
  scrollY: number;
  divRef: React.RefObject<HTMLDivElement>;
};

function MainContent({ divRef }: MainContent) {
  return (
    <div
      ref={divRef}
      className=' col-start-1 col-end-9 h-screen snap-y 
      snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth sm:col-start-2 lg:col-start-3'
    >
      <Banner />
      <Profile />
      <Educational />
      <Skills />
      <Contact />
    </div>
  );
}

export default MainContent;
