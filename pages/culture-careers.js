import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Header from "../layout/header";
import Footer from "../layout/footer";
import Counter from "../element/counter";
import TeamSlider from '../component/teamSlider';
import Testimonial from '../element/testimonial';
import Blog from '../element/blog';
import Link from 'next/link';
import Quote from '../element/quote';

function CC() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white"> 
	{/* <!-- Cultures --> */}
            <section className="content-inner-2"> 
			<div className="container">  
            <div className="section-head style-3 text-center">
				<div className="section-head style-1">
							{/* <h6 className="sub-title bgl-primary m-b20 text-primary">Cultures</h6> */}
							<h3 className="">Hum hain "Dil Se Desi!"</h3>
						 
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/cc.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                            
                         </div>
                        <p> Our un-like work policies, like Flexi hours, a non stringent dress code, a flat hierarchy, an open door approach, helps us rise and embrace a culture that puts people first, merits before seniority and talent before tenure. Being a startup, the best part is 360 degree learning aspect for a growing individual. We believe that acknowledging one’s effort, gives a sense of belongingness and family, which help us strengthen our bonds and thus gives value to our mission.</p>
						<p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						 
					</div>
                </div>
			</div><br/><br/>
		</section>  
		{/* <!-- Careers-Social Media --> */}
		<section className="content-inner"> 
			<div className="container"> 

            <div className="section-head style-3 text-center">
				<div className="section-head style-1">
							{/* <h6 className="sub-title bgl-primary m-b20 text-primary">Careers</h6> */}
							<h3 className=" ">We're hiring across the board in Content and marketing.</h3>
						</div>
				</div> 
                <div className="row align-items-center">
                <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1 mb-4"> 
				<h4 className="title">Marketing Specialist </h4>
						</div>
                        <p>Location: Bangalore, Karnataka, India.</p>
                        <h5 className='text-black'>Responsibilities</h5>
                        <ul className="list-arrow primary">
									<li>Strategise, execute and manage social media campaigns from Conception to creative to execution to analysis.</li>
									<li>Develop Social Media Marketing Strategies and plans to support and achieve business objectives.</li>
									<li>Mentor, coach and develop team to their fullest potential.</li>
									<li>Gather data thru Google Analytics/other analytical tools for our Users and improvise Campaign accordingly.</li>
						</ul>
                        <h5 className='text-black'>Basic Requirement</h5>
                        <ul className="list-arrow primary">
									<li>Graduate in any discipline, but must be a lover of Media/OTT content.</li>
									<li>2 to 5 years of Social Media handling experience.</li>
									<li>Writing and Reading skills is mandatory.</li>
									<li>Time Management Skills.</li>
						</ul>
					</div>
				<div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                  <div className="section-head style-1 mb-4"> 
			   				<h4 className="title">Graphic Design Specialist </h4>
						</div>
                        <p>Location: Bangalore, Karnataka, India.</p>
                        <h5 className='text-black'>Responsibilities</h5>
                        <ul className="list-arrow primary">
									<li>Concise and attractive designing of creatives.</li>
									<li>Successfully manage and coordinate graphic design projects from concept through completion.</li>
									<li>Work closely with principal architect on building creative algorithms for video previews</li>
                                    <li>Conceptualizing, creating and executing high end design in promotional, editorial/branding related material like banners, e-mailers, app notifications, banners, show posters etc.</li>
						</ul>
                        <h5 className='text-black'>Basic Requirement</h5>
                        <ul className="list-arrow primary">
									<li>Graduate in any discipline, but must be a lover of Media/OTT content.</li>
									<li>2 to 5 years of Social Media handling experience.</li>
									<li>Practical Knowledge of Creative Designing Software's is a MUST such as Adobe, Coral etc.</li>
						</ul>
					</div>
                 </div> 
			 
			</div><br/><br/>
	{/* <!-- Creative Design Specialist --> */}

            <div className="container"> 

           
                <div className="row align-items-center"> 
				<div className="col-lg-12 wow zoomIn "align="center" data-wow-duration="2s" data-wow-delay="0.2s">
					<div className='col-lg-6 '>	
					<div className="section-head style-3 text-center">
			<h4 >Fill the form below or mail us at - <span className="text-primary">hr@minilive.in</span></h4>
				</div> 
							<form className="dlab-form dzForm" method="POST" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user text-mini"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="Full Name" />
										</div>
									</div>
									 
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope text-mini"></i></span>
											</div>
											<input name="dzEmail" type="text" required className="form-control" placeholder="Email" />
										</div>
									</div>
								 
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file-alt text-mini"></i></span>
											</div>
											<input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Subject" />
										</div>
									</div>

									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-sms text-mini"></i></span>
											</div>
											<textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
										</div>
									</div>
								  


									<div className="col-sm-12"> 
											 Upload Resume :  
										  <div className="input-group"> 
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file text-mini"></i></span>
											</div>
											
											<input name="dzOther[project_file]" type="file" title="name"className="form-control"  required  />
										  </div>
										 



									</div>
									
									
									<div className="col-sm-12">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div>
									{/* <ReCAPTCHA
										sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
										onChange={onChange}
									/> */}
									<div className="col-sm-12 mt-0">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Send Now</button>
									</div>
								</div>
							</form>

					</div>
					</div>  </div> 
			 
			</div>
		</section>  

{/* 
		<Quote/>  */}
            </div><br/><br/>
            <Footer />
        </>
    );
}

export default CC;
