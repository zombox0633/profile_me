import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { copyToClipboard } from "../helpers";

type NavBarType = {
  handleScrollToPoint: (index: number) => void;
};

function NavBar({ handleScrollToPoint }: NavBarType) {
  return (
    <div className="hidden lg:block">
      <div className='fixed left-0 w-[20rem] h-screen bg-transparent z-20'>
        <div className='relative flex flex-col justify-between h-full mx-8 my-4'>
          <div className='text-start cursor-pointer'>
            <h2>zombox.io</h2>
          </div>
          <div className='nav__text flex flex-col justify-between items-start '>
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
          <div className='flex justify-between w-40 mb-16'>
            <a
              href='https://github.com/zombox0633'
              target='_blank'
              rel='noopener noreferrer'
              className='button_df__transition flex justify-center items-center w-10 h-10 rounded-2xl  
              hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 focus:outline focus:outline-offset-4 focus:outline-4 focus:outline-white'
            >
              <FontAwesomeIcon icon={faGithub} size='xl' color={"white"} />
            </a>
            <a
              href='https://www.linkedin.com/in/chayathorn-meesil'
              target='_blank'
              rel='noopener noreferrer'
              className='button_df__transition flex justify-center items-center w-10 h-10 rounded-2xl 
              hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 focus:outline focus:outline-offset-4 focus:outline-4 focus:outline-white'
            >
              <FontAwesomeIcon icon={faLinkedin} size='xl' color={"white"} />
            </a>
            <button
              onClick={() => copyToClipboard("chayathorn.meesil@gmail.com")}
              className='flex justify-center items-center w-10 h-10 rounded-2xl bg-transparent'
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
