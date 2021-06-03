import './AboutMe.scss';
import picture from '../../images/beach.jpeg';

function AboutMe() {
    return (    
        <article className='page__article aboutme'>  
            <div className='aboutme__left'>
                <h2 className='page__title'>My name is Anna Kubackova</h2>
                <p>
                    I am a junior front-end developer, currently finishing my studies on web development at UCN, Aalborg.
                    My main interest lies in developing web solutions.
                    <br />
                    <br />
                    I'm originally from Slovakia, but I'm a native Hungarian. I came to Denmark in 2018 to study Multimedia Design and 
                    haven't left since. Because of my previous study, I have experience in UX Design. The part I enjoy the most in my 
                    field is that I am able to make a design comes to life and satisfy company owners by converting their vision into 
                    practice.
                    <br />
                    <br />
                    I collaborate well with others. I acquired this skill in my past college years where I worked in several 
                    different teams. I've been also volunteering at the local Google Developer Group, where I was elected as 
                    the vice-chairman. Being part of this organization has given me experience in managing events as well as 
                    communication between team members. 
                    <br />
                    <br />
                    People who know me would probably use words like organized, social, creative to describe my personality. I am always 
                    keen on learning and desire to understand all the aspects of a topic. I cherish being surrounded by goal-oriented-people, 
                    like myself. I usually spend my free time painting, drawing, reading, and baking.
                    <br />
                    <br />
                    I like to meet new people, so if you feel like we could work together, please don't hesitate to reach out to me! 
                    I hope you have a great day! :)
                </p>
            </div> 
            <img className='aboutme__right' src={picture} alt='' />
        </article>
    );
}

export default AboutMe;