import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { copyToClipboard } from "../helpers";

type NavBarType = {
  handleScrollToPoint: (index: number) => void;
};

function NavBar({ handleScrollToPoint }: NavBarType) {
  return (
    <div>
      <div className='fixed z-20 my-4 lg:left-0 lg:my-0 lg:h-screen lg:w-[20rem] lg:bg-transparent'>
        <div className='relative flex justify-between lg:mx-8 lg:my-4 lg:h-full lg:flex-col'>
          <div className='cursor-pointer text-start'>
            <h2 className='text-2xl lg:text-[2.2em]'>zombox</h2>
          </div>
          <div className='nav__text hidden flex-col items-start justify-between lg:flex 2xl:mb-32'>
            <a
              href='#'
              onClick={() => handleScrollToPoint(0)}
              className='hover__border_effect my-2'
            >
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
            {/* <a
            href='#'
            onClick={() => handleScrollToPoint(4048)}
            className='hover__border_effect my-2'
          >
            Contact
          </a> */}
          </div>
          <div className=' hidden w-40 justify-between lg:mb-16 lg:flex'>
            <a
              href='https://github.com/zombox0633'
              target='_blank'
              rel='noopener noreferrer'
              className='button_df__transition flex h-10 w-10 items-center justify-center rounded-2xl  
              hover:translate-y-[-1px] hover:shadow-lg focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-white active:translate-y-0'
            >
              <FontAwesomeIcon icon={faGithub} size='xl' color={"white"} />
            </a>
            <a
              href='https://www.linkedin.com/in/chayathorn-meesil'
              target='_blank'
              rel='noopener noreferrer'
              className='button_df__transition flex h-10 w-10 items-center justify-center rounded-2xl 
              hover:translate-y-[-1px] hover:shadow-lg focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-white active:translate-y-0'
            >
              <FontAwesomeIcon icon={faLinkedin} size='xl' color={"white"} />
            </a>
            <button
              onClick={() => copyToClipboard("chayathorn.meesil@gmail.com")}
              className='flex h-10 w-10 items-center justify-center rounded-2xl bg-transparent'
            >
              <FontAwesomeIcon icon={faGooglePlusG} size='xl' color={"white"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
