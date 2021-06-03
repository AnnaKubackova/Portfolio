import { useState } from 'react';
import './Projects.scss';
import massagedesktop from '../../images/projects/Massage_desktop.png';
import massagephone from '../../images/projects/Massage_phone.png';
import chattyhome from '../../images/projects/Chatty_home.png';
import notie from '../../images/projects/Notie.png';

function Projects() {
    const [toggleTabs, setToggleTabs] = useState(1);

    const changeTab = (index) => {
        setToggleTabs(index);
    }

    return (        
        <article className='page__article projects'>
            <h2 className='page__title'>Projects</h2>

            <div className='projects__tabs'>
                <div 
                    className={toggleTabs === 1 ? 'projects__tabname projects__tabname--active' : 'projects__tabname'} 
                    onClick={() => changeTab(1)}>
                    Massage website
                </div>

                <div 
                    className={toggleTabs === 2 ? 'projects__tabname projects__tabname--active' : 'projects__tabname'} 
                    onClick={() => changeTab(2)}>
                    Chatty app
                </div>

                <div 
                    className={toggleTabs === 3 ? 'projects__tabname projects__tabname--active' : 'projects__tabname'} 
                    onClick={() => changeTab(3)}>
                    Notie app
                </div>
            </div>

            <div className='projects__contentcontainer'>
                <div className={toggleTabs === 1 ? 'projects__content projects__content--active' : 'projects__content'}>
                    <div className='description'>
                        <h3 className='description__title'>Kubacka Agnes Massage</h3>
                        <i className='description__tags'>#CMS #CustomTheme #ResponsiveDesign</i>
                        <a className='description__link' rel="noreferrer" href='https://kagnesmassage.com/' target='_blank'>kagnesmassage.com</a>
                        <p>
                            Kubacka Agnes Massage is a small massage salon owned by my sister. My client wanted a website that she 
                            can manage herself in case some content needs to be changed. She also wished for a design that represents 
                            the main focus of her business, that is fertility treatment.
                        </p>     
                        <br />     
                        <p>
                            For the UX part of the website, I was using the prototyping method. I was continuously  sketching and wireframing 
                            new ideas that I tested with several users. The color scheme was built around femininity and pureness, hence 
                            the light, pastel colors, and some shades of pink.
                        </p>                              
                        <br />       
                        <p>
                            When it came to coding, I chose to work with WordPress and develop a completely new, customized WordPress 
                            theme for this project. I also applied responsive design as I created a mobile and tablet version for 
                            the website.
                        </p>             
                    </div>
                    <div className='projects__contentright'>
                        <img src={massagedesktop} alt='' />
                        <img src={massagephone} alt='' />
                    </div>
                </div>

                <div className={toggleTabs === 2 ? 'projects__content projects__content--active' : 'projects__content'}>
                    <div className='description'>
                        <h3 className='description__title'>Chatty - Chat application</h3>
                        <i className='description__tags'>#NodeJS #ReactJS #FireStore</i>
                        <a className='description__link' rel="noreferrer" href='https://github.com/AnnaKubackova/Chatty' target='_blank'>github.com/AnnaKubackova/Chatty</a>
                        <p>
                            The Chatty project is a web application developed with ReactJs, NodeJS, and Firebase-Firestore. The aim of 
                            this project was to create a platform where users can create an account and send text messages to other users.
                        </p>     
                        <br />     
                        <p>
                            When signing up, the user can choose between creating an account from scratch or us his/her Gmail account for 
                            registration. The Gmail feature is consistently implemented at the login part too. Besides the chatting part,
                            users also have the option to delete or update their profiles.
                        </p>                              
                        <br />     
                        <p>
                            In the app, people can see everyone, who is registered - with the addition of also indicating if an individual is online 
                            or not. The user can initiate a chat with whoever he/she wishes. The messages exchanged between the two users can be 
                            viewed at any time, all the messages hold information about the exact time and date they were sent. The user can also 
                            create a group chat with several people and give the group a name. In this case, the messages also show the name of the 
                            person who sent the message.
                        </p>             
                    </div>
                    <div className='projects__contentright'>
                        <img src={chattyhome} alt='' />
                    </div>                    
                </div>

                <div className={toggleTabs === 3 ? 'projects__content projects__content--active' : 'projects__content'}>
                    <div className='description'>
                        <h3 className='description__title'>Notie - Note-taking application</h3>
                        <i className='description__tags'>#MySQL #NodeJS #MAMP</i>
                        <p>
                            Notie is a note-taking web application that makes use of NodeJS and MySQL. During the development, I was also 
                            using MAMP as the local server environment.
                        </p>     
                        <br />                   
                        <p>
                            The app allows users to create a profile, update and delete it later. The user can add new notes to his/her profile 
                            including a title and description. The notes can be updated and deleted as well.
                        </p>                              
                        <br />   
                        <p>
                            For the database deisgn, I was using MySQL. I operate with two tables - one for the users and one for their notes. The 
                            two tables are connected with a foreign key, originated from the user's table.
                        </p>             
                    </div>
                    <div className='projects__contentright'>
                        <img src={notie} alt='' />
                    </div>               
                </div>
            </div>
        </article>        
    );
}

export default Projects;