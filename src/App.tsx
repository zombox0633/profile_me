import Banner from "./components/section/Banner";
import NavBar from "./components/NavBar";
import Profile from "./components/section/Profile";
import Educational from "./components/section/Educational";
import Skills from "./components/section/Skills";
import Contact from "./components/section/Contact";

import useScrollControl from "./hook/useScrollControl";

function App() {
  const {scrollY, backgroundColor} = useScrollControl()
  return (
    <div className={`layout__myapp ${backgroundColor}`}>
      <div className='grid_position__app w-full h-full px-8 overflow-x-hidden'>
        {/* <p className=" fixed left-0 bottom-0">{scrollY}</p> */}
        <NavBar />
        <div className=" col-start-3 col-end-9">
          <Banner />
          <Profile />
          <Educational />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
