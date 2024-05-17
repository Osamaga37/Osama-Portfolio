import './MyService.css';

function myService () {
    return (
        <div>
            <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i className='bx bx-code-alt'></i>
                <h3>Front-End Developer</h3>
                <p>Creates websites using web languages such as HTML, CSS, and JavaScript</p>
                <a href="#" className="btn">Read More</a>
            </div>
            <div className="services-box">
                <i className='bx bxl-javascript'></i>
                <h3>JavaScript Developer</h3>
                <p>Creating user-facing aspects of websites using JavaScript, HTML, and CSS.</p>
                <a href="#" className="btn">Read More</a>
            </div>
                <div className="services-box">
                    <i className='bx bxl-react'></i>
                    <h3>React Developer</h3>
                    <p>Building websites using the React JavaScript library, which is popular for creating interactive user interfaces</p>
                    <a href="#" className="btn">Read More</a>
                </div>
        </div>
    </section>
        </div>
    );
}

export default myService;