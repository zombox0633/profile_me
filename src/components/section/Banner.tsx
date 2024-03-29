import Typewriter from "../Typewriter";

function Banner() {
  const toRotate = [
    "Frontend Developer.",
    "React Developer.",
    "Backend Developer.",
    "Full Stack Developer.",
    "Computer Engineer.",
  ];

  return (
    <section className='grid__container_col h-screen snap-center snap-always md:p-8'>
      <div className='col-start-1 col-end-7 flex items-center sm:col-start-2 lg:col-end-6 xl:col-start-3 xl:col-end-7'>
        <div>
          <span>hi</span>
          <div className=' flex justify-start'>
            <h1>I'm Chayathorn Meesil</h1>
          </div>
          <div className=' flex justify-start'>
            <Typewriter text={toRotate} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
