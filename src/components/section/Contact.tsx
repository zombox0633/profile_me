import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlusG, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { copyToClipboard } from "../../helpers";

function Contact() {
  return (
    <div className='snap-always snap-center h-screen p-8'>
      <div>
        <h3>Contact</h3>
      </div>
      <div className='grid__container_col h-[70vh] mt-16'>
        <div className=' col-start-2 col-end-5 flex items-center justify-between '>
          <a
            href='https://github.com/zombox0633'
            target='_blank'
            rel='noopener noreferrer'
            className='button_df__transition flex justify-center items-center w-20 h-20 rounded-2xl bg-white 
            hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 focus:outline focus:outline-offset-4 focus:outline-4 focus:outline-white'
          >
            <FontAwesomeIcon icon={faGithub} size='xl' color={"#a1afae"} />
          </a>
          <a
            href='https://www.linkedin.com/in/chayathorn-meesil'
            target='_blank'
            rel='noopener noreferrer'
            className='button_df__transition flex justify-center items-center w-20 h-20 rounded-2xl bg-white 
            hover:shadow-lg hover:translate-y-[-1px] active:translate-y-0 focus:outline focus:outline-offset-4 focus:outline-4 focus:outline-white'
          >
            <FontAwesomeIcon icon={faLinkedin} size='xl' color={"#a1afae"} />
          </a>
          <button
            onClick={() => copyToClipboard("chayathorn.meesil@gmail.com")}
            className='flex justify-center items-center w-20 h-20 rounded-2xl bg-white hover:translate-y-[-1px] active:translate-y-0'
          >
            <FontAwesomeIcon icon={faGooglePlusG} size='xl' color={"#a1afae"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
