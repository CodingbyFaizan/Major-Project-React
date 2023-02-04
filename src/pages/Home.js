import React, { useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import IMAGES from './src/img/index.js';


// function App() {
//     useEffect(() => {
//       var scroll = new SmoothScroll('a[href*="#"]');
//     }, []);



const Home = () => {
    

    return (
        <div className='App'>
            {/* <!------ Navigation Bar ------> */}

            <section id="nav-bar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                            {/* <!-- <img src="img/upscaling-logo.png"> --> */}
                            <div>
                                <span className="uptext">Up</span><span className="scalingtext">Scaling</span>
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#top">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#team">OUR TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#price">PRICE PLANS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonials">TESTIMONIALS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </section>
                {/* <!------ Slider -------> */}
                <div id="Slider">
                    <div id="#headerSlider" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                            <li data-target="#headerSlider" data-slide-to="1"></li>
                            <li data-target="#headerSlider" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/img/55.jpg" className="d-block img-fluid" alt="First Slide" />
                                <div className="carousel-caption">
                                    {/* <!-- <h5>Web Design</h5> --> */}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/11.jpg" className="d-block img-fluid" alt="Second Slide" />
                                <div className="carousel-caption">
                                    {/* <!-- <h5>App Development</h5> --> */}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/22.jpg" className="d-block img-fluid" alt="Third Slide" />
                                <div className="carousel-caption">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                {/* <!---About--> */}
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>About us</h2>
                                <div className="about-content">
                                    <p>
                                        UpScaling website helps freelancers and agencies sell their digital services to the general public by creating an online stroe on the website. Online Services
                                        are getting very popular these days.
                                    </p>
                                    <p>
                                        <span style={{fontweight:'bold',color: 'green'}}>Stay tuned for More Services!.</span>
                                    </p>
                                </div>
                                <button type="button" className="btn btn-primary">Read More</button>
                            </div>
                            <div className="col-md-6 skills-bar">
                                <p>Web Development</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{width:80}}>80%</div>
                                </div>
                                <p>App Development</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{width:45}}>45%</div>
                                </div>
                                <p>UI/UX Designing</p>
                                <div className="progress">
                                    <div className="progress-bar" style={{width:75}}>75%</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!---services---> */}
                <section id="services">
                    <div className="container">
                        <h1>Our Services</h1>
                        <div className="row services">
                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i className="fa fa-desktop"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>Web development refers to the building, creating, and maintaining of websites.
                                    It includes aspects such as web design, web publishing, web programming, and database management.
                                    It is the creation of an application that works over the internet i.e. websites.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i className="fa fa-tablet"></i>
                                </div>
                                <h3>App Development</h3>
                                <p>Application development is the process of creating a computer program or a set of programs to perform the different tasks that a business requires.
                                    From calculating monthly expenses to scheduling sales reports, applications help businesses automate processes and increase efficiency.
                                </p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i className="fa fa-line-chart"></i>
                                </div>
                                <h3>UI/UX Designing</h3>
                                <p>UX design focuses on the interaction that a human user has with everyday products and services.
                                    The goal of UX design is to make using these products and services, both digital or physical, easy, logical, and fun.</p>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="icon">
                                    <i className="fa fa-bell"></i>
                                </div>
                                <h3>And many more </h3>
                                <p>Stay tuned for more upcoming services from the freelancers.
                                    Many freelancers from various domain will be added in the future.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!--team member----> */}
                <section id="team">
                    <div className="container">
                        <h1>Our Team</h1>
                        <div className="row">
                            <div className="col-md-3 profile-pic text-center">
                                <div className="img-box">
                                    <img src="assets/img/team1.jpg" className="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i className="fa fa-linkedin"></i></li></a>

                                    </ul>
                                </div>
                                <h2>Zaid Ali</h2>
                                <h3>Founder / CEO</h3>
                                {/* <!-- <P>Zaid Ali</P> --> */}
                                {/* <!-- <p>Also a founder of Hazyaz technology.</p> --> */}
                            </div>
                            <div className="col-md-3 profile-pic text-center">
                                <div className="img-box">
                                    <img src="assets/img/team2.jpg" className="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i className="fa fa-linkedin"></i></li></a>

                                    </ul>
                                </div>
                                <h2>Shaikh Faizan</h2>
                                <h3>Founder / CEO</h3>
                                {/* <!-- <P>Hello this my website and u can get here some technology videos and interesting facts so subscribe share and comment </P> --> */}
                            </div>
                            <div className="col-md-3 profile-pic text-center">
                                <div className="img-box">
                                    <img src="assets/img/team3.jpg" className="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i className="fa fa-linkedin"></i></li></a>

                                    </ul>
                                </div>
                                <h2>Ansari Anas</h2>
                                <h3>Founder / CEO</h3>
                                {/* <!-- <P>Hello this my website and u can get here some technology videos and interesting facts so subscribe share and comment </P> --> */}
                            </div>
                            <div className="col-md-3 profile-pic text-center">
                                <div className="img-box">
                                    <img src="assets/img/team4.jpg" className="img-responsive" />
                                    <ul>
                                        <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                        <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                        <a href="#"><li><i className="fa fa-linkedin"></i></li></a>

                                    </ul>
                                </div>
                                <h2>Ansari Saadan</h2>
                                <h3>Founder / CEO</h3>
                                {/* <!-- <P>Hello this my website and u can get here some technology videos and interesting facts so subscribe share and comment </P> --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!---promo-----> */}
                {/* style={{backgroundImage: 'url(' + require('public/assets/img/services.png') + ')'}} */}
                <section id="promo" style={ {backgroundImage : "url('/src/img/services.png)" } }>
                    <div className="container">
                        <p>For any query contact us!</p>
                        <a href="#contact" className="btn btn-primary">Contact Us</a>
                    </div>
                </section>

                {/* <!--price plans--> */}
                <section id="price">

                    <div className="container">
                        <h1>Subscriptions</h1>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="single-price">
                                    <div className="price-head">
                                        <h2>Free</h2>
                                        <p>$0/<span>month</span></p>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i>5 Services</li>
                                            <li><i className="fa fa-times-circle"></i>limited Request</li>
                                            <li><i className="fa fa-times-circle"></i>limited Support</li>
                                        </ul>
                                    </div>
                                    <div className="price-button">
                                        <a className="buy-btn" href="#">Join Free</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-price">
                                    <div className="price-head">
                                        <h2>Start Up</h2>
                                        <p>$10/<span>month</span></p>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i>10 Services</li>
                                            {/* <!-- <li><i className="fa fa-check-circle"></i>100GB Bandwidth</li> */}
                                            {/* <li><i className="fa fa-check-circle"></i>50 Email Account</li> --> */}
                                            <li><i className="fa fa-times-circle"></i>Unlimited Request</li>
                                            <li><i className="fa fa-times-circle"></i>limited Support</li>
                                        </ul>
                                    </div>
                                    <div className="price-button">
                                        <a className="buy-btn" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-price">
                                    <div className="price-head">
                                        <h2>Business</h2>
                                        <p>$50/<span>month</span></p>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i>20 Services</li>
                                            {/* <!-- <li><i className="fa fa-check-circle"></i>20GB Bandwidth</li> */}
                                            {/* <li><i className="fa fa-check-circle"></i>15 Email Account</li> --> */}
                                            <li><i className="fa fa-times-circle"></i>limited Domain</li>
                                            <li><i className="fa fa-check-circle"></i>Unlimited Support</li>
                                        </ul>
                                    </div>
                                    <div className="price-button">
                                        <a className="buy-btn" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="single-price">
                                    <div className="price-head">
                                        <h2>Advanced</h2>
                                        <p>$100/<span>month</span></p>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li><i className="fa fa-check-circle"></i>50 Services</li>
                                            {/* <!-- <li><i className="fa fa-check-circle"></i>Unlimited Bandwidth</li> */}
                                            {/* <li><i className="fa fa-check-circle"></i>Unlimited Email Account</li> --> */}
                                            <li><i className="fa fa-check-circle"></i>Unlimited Domain</li>
                                            <li><i className="fa fa-check-circle"></i>Unlimited Support</li>
                                        </ul>
                                    </div>
                                    <div className="price-button">
                                        <a className="buy-btn" href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-----testimonials------> */}
                <section id="testimonials">
                    <div className="container">
                        <h1>Testimonials</h1>
                        <p className="text-center">Subscribe Easy Tutorials youtube channel to wathc more videos.</p>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="profile">
                                    <img src="assets/img/team1.jpg" className="user" />
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        We used UpScaling for SEO, our logo, website, copy,
                                        animated videos - literally everything.
                                        It's a best way to building a team as a startup.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <h3>Irfan Shaikh <span>Co-Founder at XYZ</span></h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="profile">
                                    <img src="assets/img/team2.jpg" className="user" />
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        When you want to create a business bigger than yourself,
                                        you need a lot of help.
                                        That's what UpScaling does.
                                        It nice to have a website like UpScaling.
                                        <i className="fa fa-quote-right"></i>
                                    </blockquote>
                                    <h3>Sohail Ansari <span>Manager at XYZ</span></h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="profile">
                                    <img src="assets/img/team3.jpg" className="user" />
                                    <blockquote>
                                        <i className="fa fa-quote-left"></i>
                                        We've used UpScaling for Shopify web development,
                                        graphic design, and backend web development.
                                        Working with UpScaling makes my job a little easier everyday.
                                        <i className="fa fa-quote-right"></i>

                                    </blockquote>
                                    <h3>Mohammad Fraz <span>Founder / CEO at XYZ</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!----Get In Touch-----> */}
                <section id="contact">
                    <div className="container">
                        <h1>Get In Touch</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="contact-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            // value={phone}
                                            // onChange={(event) => setPhone(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Id"
                                            // value={email}
                                            // onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            placeholder="Message"
                                            // value={message}  
                                            // onChange={(event) => setMessage(event.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        SEND MESSAGE
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-6 contact-info">

                                <div className="follow"><b>Address:</b><i className="fa fa-map-marker"></i>XYZ Road,Bangalore,IN</div>

                                <div className="follow"><b>Phone:</b><i className="fa fa-phone"></i>+1 1234567890</div>

                                <div className="follow"><b>Email:</b><i className="fa fa-envelope-o"></i>example@website.com</div>

                                <div className="follow"><label><b>Get Social:</b></label>

                                    <a href="#"> <i className="fa fa-facebook"></i></a>
                                    <a href="#"> <i className="fa fa-youtube-play"></i></a>
                                    <a href="#"> <i className="fa fa-twitter"></i></a>
                                    <a href="#"> <i className="fa fa-google-plus"></i></a>

                                </div>

                            </div>

                        </div>
                    </div>
            </section>
{/* < !----Footer-----> */ }
        <section id="footer">
            <div className="container text-center">
                <p> Made With <i className="fa fa-heart-o"></i>  By our Team members </p>
            </div>
        </section>

        {/* <!----- Footer End-----> */ }
        </div>
    );
}

// className Home extends React.Component {
//     render() {
//         return (

//         <div>

                

//         </div>
//     );
//   }
// }

export default Home;