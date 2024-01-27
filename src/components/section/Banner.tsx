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
    <section className='grid__container_col h-screen py-8'>
      <div className='col-start-3 col-end-7 flex items-center '>
        <div>
          <span>hi</span>
          <div className=' flex justify-start'>
            <h1>I'am Chayathorn Meesil</h1>
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
