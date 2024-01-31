import ImageMe from "../../img/ImageMe.jpg";
import Resume from "../../cv/Chayatron_Resume.pdf";

function Profile() {
  return (
    <section className='snap-always snap-center flex flex-wrap gap-2 h-screen pr-8 py-8 lg:p-8'>
      <div>
        <h3 className="hidden lg:block">Profile</h3>
      </div>
      <div className='flex items-center h-full'>
        <div className='md:grid__container_col'>
          <div className="md:col-start-1 md:col-end-3 flex justify-center mb-10 sm:mb-16">
            <div className='w-40 sm:w-48 xl:w-64 2xl:w-[18rem] h-56 sm:h-[21rem] xl:h-auto overflow-hidden rounded-full shadow-2xl'>
              <img src={ImageMe} alt='me' className='object-center' loading="eager" />
            </div>
          </div>
          <div className='md:col-start-4 md:col-end-7 flex items-center h-[18rem] sm:h-auto'>
            <div>
              <h2 className=' text-xl lg:text-2xl 2xl:text-[2em]'>My name is Chayathorn Meesil.</h2>
              <p className='mt-4 pr-2 sm:pr-8 xl:pr-16 2xl:pr-24 text-sm 2xl:text-lg text-justify leading-7 xl:leading-8 2xl:leading-9'>
                I am a graduate in <span className='text-amber'>computer engineering</span> from
                Rajamangala University of Technology. I am keenly interested in technology,
                specifically in roles such as{" "}
                <span className='text-amber'>full-stack developer.</span> I am ready to learn and
                take on challenging projects or tasks.
              </p>
              <div className=' mt-8'>
                <a href={Resume}>
                  <button>Download CV</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
