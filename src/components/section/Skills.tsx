import { skillsData } from "../../constraint/SKILLS_DATA";

function Skills() {
  return (
    <section className='snap-always snap-center h-screen py-8 sm:p-8'>
      <div className="mb-8 lg:mb-0">
        <h3 className="hidden lg:block">Skills</h3>
      </div>
      <div className=' flex flex-col justify-center sm:mt-6 2xl:mt-20'>
        <div className='grid__container_col'>
          <div className='grid__container_row col-start-1 2xl:col-start-2 col-end-7 sm:gap-2 h-[75vh]'>
            <div className=' flex items-center my-2'>
              <div>
                <h3 className=' sm:hidden my-4 text-[1.2em]'>Tech Stack</h3>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Programming Languages</h3>
                <div className='div__skills_layout'>
                  {skillsData.programmingLanguages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' flex items-center my-1'>
              <div>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Frameworks and Libraries</h3>
                <div className='div__skills_layout'>
                  {skillsData.frameworksAndLibraries.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' flex items-center my-1'>
              <div>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Databases</h3>
                <div className='div__skills_layout'>
                  {skillsData.databases.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' flex items-center my-1'>
              <div>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Development Tools</h3>
                <div className='div__skills_layout'>
                  {skillsData.developmentTools.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex items-center my-1'>
              <div>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Testing and CI/CD</h3>
                <div className='div__skills_layout'>
                  {skillsData.testing.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className='flex items-center my-1'>
              <div>
                <h3 className='hidden sm:block mb-2 text-[1em] sm:text-[1.2em] lg:text-[1.3em]'>Runtime Environments</h3>
                <div className='div__skills_layout'>
                  {skillsData.runtimeEnvironments.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
