function Educational() {
  return (
    <section className='flex h-screen snap-center snap-always flex-wrap  gap-2 p-8'>
      <div className='mb-8'>
        <h3 className='hidden lg:block'>Education</h3>
      </div>
      <div className='flex h-[75vh] items-start sm:items-center'>
        <div className='lg:grid__container_col h-[70vh]'>
          <div className='lg:col-start-1 lg:col-end-3'>
            <div className=' mb-4 mr-4 lg:mb-0 xl:mr-8'>
              <div className=' mb-2 flex items-center sm:mb-0 sm:h-20 lg:mb-4 2xl:h-8'>
                <span className='material-symbols-outlined mr-4 hidden sm:block'>polyline</span>
                <h2 className='text-lg sm:text-xl xl:text-2xl'> API Development</h2>
              </div>
              <div>
                <p className='text-justify text-[0.8rem] sm:text-[0.9rem] xl:mr-6 2xl:mr-8 2xl:text-base'>
                  Experienced in developing APIs for seamless front-end and back-end integration.
                  Proficient in Node.js and Spring, creating efficient interfaces for effective data
                  exchange across platforms.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:col-start-3 lg:col-end-5 2xl:flex 2xl:flex-col 2xl:justify-center'>
            <div className='mb-4 mr-4 lg:mb-0 xl:mr-8'>
              <div className=' mb-2 flex items-center sm:mb-0 sm:h-20 lg:mb-4 2xl:h-8'>
                <span className='material-symbols-outlined mr-4 hidden sm:block'>grid_view</span>
                <h2 className=' text-lg sm:text-xl xl:text-2xl'>Web Design</h2>
              </div>
              <div>
                <p className='text-justify text-[0.8rem] sm:text-[0.9rem] xl:mr-6 2xl:mr-8 2xl:text-base'>
                  Skilled in crafting visually appealing websites with a focus on user-friendly and
                  responsive design. Expertise in adapting layouts to ensure optimal viewing across
                  various devices, enhancing user engagement and accessibility.
                </p>
              </div>
            </div>
          </div>
          <div className='lg:col-start-5 lg:col-end-7 2xl:flex 2xl:flex-col 2xl:justify-end'>
            <div className=' mr-4 xl:mr-12'>
              <div className=' mb-2 flex items-center sm:mb-0 sm:h-20 lg:mb-4 2xl:h-8'>
                <span className='material-symbols-outlined mr-2 hidden sm:block'>architecture</span>
                <h2 className=' text-lg sm:text-xl xl:text-2xl'>Code Optimization</h2>
              </div>
              <div>
                <p className='text-justify text-[0.8rem] sm:text-[0.9rem] xl:mr-6 2xl:mr-8 2xl:text-base'>
                  Proficient in optimizing existing code through refactoring for improved
                  readability and efficiency. Demonstrates ability in reusing code components to
                  enhance software maintainability and reduce development time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educational;
