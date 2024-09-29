import { skillsData } from "../../constraint/SKILLS_DATA";

function Skills() {
  return (
    <section className='h-screen snap-center snap-always py-8 sm:p-8'>
      <div className='mb-8 lg:mb-0'>
        <h3 className='hidden lg:block'>Skills</h3>
      </div>
      <div className=' flex flex-col justify-center sm:mt-6 2xl:mt-20'>
        <div className='grid__container_col'>
          <div className='grid__container_row col-start-1 col-end-7 h-[75vh] sm:gap-2 2xl:col-start-2'>
            <div className=' my-2 flex items-center'>
              <div>
                <h3 className=' my-4 text-[1.2em] sm:hidden'>Tech Stack</h3>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Programming Languages
                </h3>
                <div className='div__skills_layout'>
                  {skillsData.programmingLanguages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' my-1 flex items-center'>
              <div>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Frameworks and Libraries
                </h3>
                <div className='div__skills_layout'>
                  {skillsData.frameworksAndLibraries.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' my-1 flex items-center'>
              <div>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Databases
                </h3>
                <div className='div__skills_layout'>
                  {skillsData.databases.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className=' my-1 flex items-center'>
              <div>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Development Tools
                </h3>
                <div className='div__skills_layout'>
                  {skillsData.developmentTools.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className='my-1 flex items-center'>
              <div>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Testing and CI/CD
                </h3>
                <div className='div__skills_layout'>
                  {skillsData.testing.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>
            <div className='my-1 flex items-center'>
              <div>
                <h3 className='mb-2 hidden text-[1em] sm:block sm:text-[1.2em] lg:text-[1.3em]'>
                  Runtime Environments
                </h3>
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
