import Banner from "./section/Banner";
import Profile from "./section/Profile";
import Skills from "./section/Skills";
import Educational from "./section/Educational";
import Contact from "./section/Contact";

type MainContent = {
  scrollY: number;
  divRef: React.RefObject<HTMLDivElement>;
};

function MainContent({ divRef }: MainContent) {
  return (
    <div
      ref={divRef}
      className=' col-start-1 sm:col-start-2 lg:col-start-3 col-end-9 
      snap-y snap-mandatory scroll-smooth h-screen overflow-y-scroll overflow-x-hidden'
    >
      <Banner />
      <Profile />
      <Educational />
      <Skills />
      {/* <Contact /> */}
    </div>
  );
}

export default MainContent;
