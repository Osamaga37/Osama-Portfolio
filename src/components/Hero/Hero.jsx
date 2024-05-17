import './Hero.css';
import myPic from '../../assets/images/me.png'

function Hero () {
    return (
        <div>
             <section className="home" id="home">
        <div className="home-content">
            <h3>Hello, I'm</h3>
            <h1 className='tile'><span className='name'>Osama Gaber</span></h1>
            <h3>And I'm a <span className='title'></span></h3>
            <p>I am Skilled in HTML, CSS, JavaScript, Bootstrap, Responsive Web and React. I have strong
            interpersonal skills</p>
            <div className="social-media">
                <a href="https://www.facebook.com/osama.gaber.7568"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/osamaga81/"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/osama-gaber/"><i class='bx bxl-linkedin'></i></a>
                <a href="https://github.com/Osamaga37"><i class='bx bxl-github'></i></a>
            </div>
            <a href="https://drive.google.com/file/d/1yxrj_wKrIvQgWBjCEAIdiJbV9tpYuWrp/view?usp=sharing" className="btn">Download CV</a>
        </div>
        <div className="home-image">
            <img src={myPic} alt="my pic" />
        </div>
    </section>
        </div>
    );
}

export default Hero;