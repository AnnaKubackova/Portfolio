import { useState } from 'react';
import profile from './images/profile.jpg';
import close from './images/icons/cancel.svg';
import email from './images/icons/email.svg';
import linkedin from './images/icons/linkedin-logo.svg';
import github from './images/icons/github.svg';
import MenuCircle from './Components/MenuCircle/MenuCircle';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  const [isSkillsActive, setSkillsActive] = useState("false");
  const [isAboutMeActive, setAboutMeActive] = useState("false");
  const [isProjectsActive, setProjectsActive] = useState("false");

  const handleToggleSkills = () => {
    setSkillsActive(!isSkillsActive);  
  };

  const handleToggleAboutMe = () => {
    setAboutMeActive(!isAboutMeActive);  
  };

  const handleToggleProjects = () => {
    setProjectsActive(!isProjectsActive);  
  };

  return (
    <div className="app">      
      <div className='introduction'>
        <img className='introduction__image' src={profile} alt="" />
        <div className='introduction__textbox'>
          <h1 className='introduction__title'>Hello, I'm Anna</h1>
          <p className='introduction__text'>And I am a front-end developer. <br />
          My passion is to create websites from start to finish.</p>
          <div className='introduction__some'>
            <a href=''><img src={email} alt=''/></a>
            <a rel="noreferrer" href='https://www.linkedin.com/in/anna-kubackova-911832170' target='_blank'><img src={linkedin} alt=''/></a>
            <a rel="noreferrer" href='https://github.com/AnnaKubackova' target='_blank'><img src={github} alt=''/></a>
          </div>
        </div>
      </div>

      <hr />

      <nav className='navigation'>
        <ul className='navigation__list'>
          <li onClick={handleToggleSkills}><MenuCircle message='Skills' /></li>
          <li onClick={handleToggleAboutMe}><MenuCircle message='About me' /></li>
          <li onClick={handleToggleProjects}><MenuCircle message='Projects' /></li>
        </ul>    
      </nav>
      
      <section className={!isSkillsActive ? "page showSkills" : "page hideSkills"}>
        <img className='page__closebutton' onClick={handleToggleSkills} src={close} alt='' />
        <Skills />
      </section>

      <section className={!isAboutMeActive ? "page showAboutMe" : "page hideAboutMe"}>
        <img className='page__closebutton' onClick={handleToggleAboutMe} src={close} alt='' />
        <AboutMe />
      </section>

      <section className={!isProjectsActive ? "page showProjects" : "page hideProjects"}>
        <img className='page__closebutton' onClick={handleToggleProjects} src={close} alt='' />
        <Projects />
      </section>

      <div className='iconref'>
        Icons made by 
        <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> 
        from 
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
