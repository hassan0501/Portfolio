import './portfolio.css'
import { useRef } from 'react'
import billImg from './bill-port.png'
import memeImg from './meme-port.png'
import weatherImg from './weather-port.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

 export default function Main() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null);
  const contactRef = useRef(null)

  const scrollToAbout = () =>{
    aboutRef.current?.scrollIntoView({behavior: 'smooth'})
  }
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'})
  }


 return(
 <div className='apex-div'>

  <header>
    <nav>
      <div>
        <h2>LOGO</h2>
      </div>
    <div className='sec1-about'>
        <span onClick={scrollToAbout} className='sec-span'>About</span>
        <span onClick={scrollToProjects} className='sec-span'>Projects</span>
        <span onClick={scrollToContact} className='sec-span'>Contact</span>
      </div>

      <div className='brand-div'>
        <a href='https://github.com/hassan0501'><FontAwesomeIcon  icon={faGithub} size="2x" /></a>
        <a href='https://github.com/hassan0501'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href='https://github.com/hassan0501'> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      </div>
    </nav>
  </header>

    <section className='section-1'>
      <div className='sec-1-sub'>
      <div className='sec1-div'>
        <h1>Hassan Ayub</h1>
        <h3>Web Developer</h3>
        <span>I build accessible, pixel-perfect digital experiences for the web.</span>
        <div className='brand-div-L'> 
        <a href='https://github.com/hassan0501'><FontAwesomeIcon  icon={faGithub} size="2x" /></a>
        <a href='https://github.com/hassan0501'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href='https://github.com/hassan0501'> <FontAwesomeIcon icon={faInstagram} size="2x" /></a>
      </div>
      </div>

      </div>
      
    </section>

    <section ref={aboutRef} className='section-2'>
      <div  className='about-sec'>
        <h2>About</h2>
      <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
      <p>Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</p>
      <p>In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API</p>
      <p>In my spare time i am usually playing chess and play sports like football</p>
      </div>
    
      <div ref={projectsRef} className='projects-div-container'>
      <h2>Projects</h2>
  
      <div className='project-div'>
      <a href='https://hassan0501.github.io/new-bill/'>
      <div><img alt='img' src={billImg}></img></div>
      </a>
        <div>
        <h2>Spend Bill Gate's money</h2>
          <p>In this website the user gets to spend multi billionare bill gate's money.This website is built on only using html vanilla javascript and vanilla css</p>
        </div>
      </div>
      <div className='project-div'>
        <a href='https://hassan0501.github.io/meme/'>
        <div><img alt='img' src={memeImg}></img></div>
        </a>
        <div>
          <h2>Meme generator</h2>
          <p>This is a fun little project that fetches the top 100 most popular meme templates whic the user can edit and create funny memes using the top text and bottom text</p>
        </div>
      </div>

      <div className='project-div'>
        <a href='https://hassan0501.github.io/reactWeather-app/'>
        <div><img alt='img' src={weatherImg}></img></div>
        </a>
        <div>
          <h2> Weather app</h2>
          <p>This is a classic weather app project which fetch data from an open source Api .the project showcases undersatnding of react and it's components and conditional rendering</p>
        </div>
      </div>
      </div>

      
      <div ref={contactRef} className='contact-div'>
        <form>
        <h2>Get in Touch</h2>
      <div className='name-div'>
        <input placeholder='Name' type="text" id="name" name="name" required/>
        <input placeholder='LastName' type="text" id="name" name="name" required/>
      </div>
        
        <div className='email-div'>
       
        <input placeholder='Email' type="email" id="email" name="email" required/>
        <input placeholder='Phone No.' type="text" id="name" name="name" required/>

        </div>

        
        <textarea placeholder='Message' id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
        </form>
        
      </div>
    </section>
 </div>
 )
  
}