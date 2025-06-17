import ImageMe from "../../img/ImageMe.jpg";
import Resume from "../../cv/ChayatornMeesil_FullStack_CV.pdf";

function Profile() {
  
  return (
    <section className='flex h-screen snap-center snap-always flex-wrap gap-2 py-8 pr-8 lg:p-8'>
      <div>
        <h3 className='hidden lg:block'>Profile</h3>
      </div>
      <div className='flex h-full items-center'>
        <div className='md:grid__container_col'>
          <div className='mb-10 flex justify-center sm:mb-16 md:col-start-1 md:col-end-3'>
            <div className='h-56 w-40 overflow-hidden rounded-full shadow-2xl sm:h-[21rem] sm:w-48 xl:h-auto xl:w-64 2xl:w-[18rem]'>
              <img src={ImageMe} alt='me' className='object-center' loading='eager' />
            </div>
          </div>
          <div className='flex h-[18rem] items-center sm:h-auto md:col-start-4 md:col-end-7'>
            <div>
              <h2 className=' text-xl lg:text-2xl 2xl:text-[2em]'>My name is Chayathorn Meesil.</h2>
              <p className='mt-4 pr-2 text-justify text-sm leading-7 sm:pr-8 xl:pr-16 xl:leading-8 2xl:pr-24 2xl:text-lg 2xl:leading-9'>
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
