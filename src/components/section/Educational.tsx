import React from "react";

function Educational() {
  return (
    <section className='h-screen py-8'>
      <div>
        <h3>Educational</h3>
      </div>
      <div className='grid__container_col h-[70vh] mt-24'>
        <div className=' col-start-1 col-end-3'>
          <div className='mr-8'>
            <div className=' flex items-center'>
              <span className='material-symbols-outlined mr-4'>polyline</span>
              <h2 className='leading-[4.5rem]'> API Development</h2>
            </div>
            <div>
              <p className='text-base text-justify'>
                Experienced in developing APIs for seamless front-end and back-end integration.
                Proficient in Node.js and Spring, creating efficient interfaces for effective data
                exchange across platforms.
              </p>
            </div>
          </div>
        </div>
        <div className=' col-start-3 col-end-5 flex flex-col justify-center'>
          <div>
            <div className=' flex items-center'>
              <span className='material-symbols-outlined mr-4'>grid_view</span>
              <h2 className='leading-[4.5rem]'>Web Design</h2>
            </div>
            <div className='mr-8'>
              <p className='text-base text-justify'>
                Skilled in crafting visually appealing websites with a focus on user-friendly and
                responsive design. Expertise in adapting layouts to ensure optimal viewing across
                various devices, enhancing user engagement and accessibility.
              </p>
            </div>
          </div>
        </div>
        <div className=' col-start-5 col-end-7 flex flex-col justify-end'>
          <div className='mr-12'>
            <div className=' flex items-center'>
              <span className='material-symbols-outlined mr-2'>architecture</span>
              <h2 className='leading-[4.5rem]'>Code Optimization</h2>
            </div>
            <div>
              <p className='text-base text-justify'>
                Proficient in optimizing existing code through refactoring for improved readability
                and efficiency. Demonstrates ability in reusing code components to enhance software
                maintainability and reduce development time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educational;
