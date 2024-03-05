import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { copyToClipboard } from "../../helpers";

function Contact() {
  return (
    <section className='block h-screen snap-center snap-always p-8 lg:hidden'>
      <div className='hidden'>
        <h3>Contact</h3>
      </div>
      <div className='grid__container_col mt-8 h-[70vh]'>
        <div className='col-start-2 col-end-6 flex items-center justify-between sm:col-end-5 '>
          <a
            href='https://github.com/zombox0633'
            target='_blank'
            rel='noopener noreferrer'
            className='button_df__transition flex h-12 w-12 items-center justify-center rounded-xl bg-white hover:translate-y-[-1px] hover:shadow-lg focus:outline focus:outline-4 focus:outline-offset-4 
            focus:outline-white active:translate-y-0 sm:h-16 sm:w-16 sm:rounded-2xl md:h-20 md:w-20'
          >
            <FontAwesomeIcon icon={faGithub} size='xl' color={"#a1afae"} />
          </a>
          <a
            href='https://www.linkedin.com/in/chayathorn-meesil'
            target='_blank'
            rel='noopener noreferrer'
            className='button_df__transition flex h-12 w-12 items-center justify-center rounded-xl bg-white hover:translate-y-[-1px] hover:shadow-lg focus:outline focus:outline-4 focus:outline-offset-4 
            focus:outline-white active:translate-y-0 sm:h-16 sm:w-16 sm:rounded-2xl md:h-20 md:w-20'
          >
            <FontAwesomeIcon icon={faLinkedin} size='xl' color={"#a1afae"} />
          </a>
          <button
            onClick={() => copyToClipboard("chayathorn.meesil@gmail.com")}
            className='flex h-12 w-12 items-center justify-center rounded-xl bg-white hover:translate-y-[-1px] active:translate-y-0 sm:h-16 sm:w-16 sm:rounded-2xl md:h-20 md:w-20'
          >
            <FontAwesomeIcon icon={faGooglePlusG} size='xl' color={"#a1afae"} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
