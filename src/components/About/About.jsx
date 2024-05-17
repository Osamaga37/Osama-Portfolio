import './About.css';
import myPic from '../../assets/images/me.png';

function About() {
    return (
        <div>
             <section class="about" id="about">
        <div class="about-img">
            <img src={myPic} alt="" />
        </div>
        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>Front-End Developer</h3>
            <p>I am Skilled in HTML, CSS, JavaScript, Bootstrap, Responsive Web and React. I have strong
            interpersonal skills</p>
            <a href="#" class="btn">Read More</a>
        </div>
    </section>
        </div>
    );
}

export default About;