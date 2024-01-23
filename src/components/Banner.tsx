import Typewriter from "./Typewriter";

function Banner() {
  const toRotate = ['Hello', 'World', 'React'];

  return (
    <div className=' flex justify-center items-center max-w-[100vw] min-h-screen'>
      <div>
        <Typewriter text={toRotate}/>
      </div>
    </div>
  );
}

export default Banner;
