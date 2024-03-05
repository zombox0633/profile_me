import { ToastContainer } from "react-toastify";

import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import useBackgroundColor from "./hook/useBackgroundColor";

import useScrollControl from "./hook/useScrollControl";

function App() {
  const { scrollY, divRef, handleScrollToPoint } = useScrollControl();
  const { backgroundColor } = useBackgroundColor({ scrollY });
  return (
    <div className={`layout__myapp ${backgroundColor}`}>
      <ToastContainer />
      <div className='grid_position__app h-full w-full overflow-x-hidden pl-8'>
        {/* <p className=" fixed left-0 bottom-0">{scrollY}</p> */}
        <NavBar handleScrollToPoint={handleScrollToPoint} />
        <MainContent scrollY={scrollY} divRef={divRef} />
      </div>
    </div>
  );
}

export default App;
