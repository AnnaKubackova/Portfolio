import './Skills.scss';
import design from '../../images/icons/sketch.svg';
import code from '../../images/icons/web-programming.svg';

function Skills() {
    return (  
        <article className='page__article skills'>
            <h2 className='page__title'>My competences</h2>

            <div className='skills__container'>
                <div className='skills__set'>
                    <img className='skills__icon' src={design} alt='' />
                    <h3>Designing</h3>
                    <p>I like creating simple, clean design layouts that bring joy to the users.</p>

                    <h4>Tools I can use:</h4>
                    <p>AdobeXD, Figma</p>  

                    <h4>I like doing:</h4>
                    <ul>
                        <li>Design Thinking</li>
                        <li>User Testing</li>
                        <li>Wireframing</li>
                    </ul>                  
                </div>

                <div className='skills__set'>
                    <img className='skills__icon' src={code} alt='' />
                    <h3>Coding</h3>
                    <p>I enjoy coding websites from scratch and bringing ideas to life. </p>

                    <h4>I'm also familiar with:</h4>
                    <p>PHP, Bootstrap, VueJS, Git</p>

                    <h4>Languages/Tools I know:</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS, SASS</li>
                        <li>JavaScript (ReactJS, NodeJS)</li>
                        <li>SQL</li>
                        <li>WordPress</li>
                    </ul>
                </div>
            </div>
            
        </article>         
    );
}

export default Skills;