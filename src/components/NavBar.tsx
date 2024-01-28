type NavBarType = {
  handleScrollToPoint: (index: number) => void;
};

function NavBar({ handleScrollToPoint }: NavBarType) {
  return (
    <div className='fixed left-0 w-[20rem] h-screen bg-transparent z-20'>
      <div className='relative flex flex-col h-full mx-8 my-4'>
        <div className='text-start cursor-pointer'>
          <h2>zombox.io</h2>
        </div>
        <div className='nav__text flex flex-col justify-between items-start mt-60 '>
          <a href='#' onClick={() => handleScrollToPoint(0)} className='hover__border_effect my-2'>
            Home
          </a>
          <a
            href='#'
            onClick={() => handleScrollToPoint(1012)}
            className='hover__border_effect my-2'
          >
            Profile
          </a>
          <a
            href='#'
            onClick={() => handleScrollToPoint(2024)}
            className='hover__border_effect my-2'
          >
            Educational
          </a>
          <a
            href='#'
            onClick={() => handleScrollToPoint(3036)}
            className='hover__border_effect my-2'
          >
            Skills
          </a>
          <a
            href='#'
            onClick={() => handleScrollToPoint(4048)}
            className='hover__border_effect my-2'
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
