import ImageMe from "../../img/ImageMe.jpg";
import Resume from "../../cv/Chayatron_Resume.pdf";

function Profile() {
  return (
    <section className='snap-always snap-center h-screen p-8'>
      <div>
        <h3>Profile</h3>
      </div>
      <div className='grid__container_col mt-32'>
        <div className=' col-start-1 col-end-3 w-[20rem] ml-8 overflow-hidden rounded-full shadow-2xl'>
          <img src={ImageMe} alt='me' className='object-center' />
        </div>
        <div className=' flex items-center col-start-4 col-end-7'>
          <div>
            <h2 className='text-[2em]'>My name is Chayathorn Meesil.</h2>
            <p className='mt-4 pr-16 text-lg text-justify leading-8'>
              I am a graduate in <span className='text-amber'>computer engineering</span> from
              Rajamangala University of Technology. I am keenly interested in technology,
              specifically in roles such as <span className='text-amber'>frontend developer</span>,{" "}
              <span className='text-amber'>backend developer</span>, and{" "}
              <span className='text-amber'>full-stack developer.</span> I am ready to learn and
              take on challenging projects or tasks.
            </p>
            <div className='mt-8'>
              <a href={Resume}>
                <button>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
