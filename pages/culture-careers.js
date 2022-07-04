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
							<h6 className="sub-title bgl-primary m-b20 text-primary">Cultures</h6>
							<h3 className="text-primary">MiniLive - Hum hain "Dil Se Desi!"</h3>
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/culture.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Our Cultures </h2>
                         </div>
                        <p> Our un-like work policies, like Flexi hours, a non stringent dress code, a flat hierarchy, an open door approach, helps us rise and embrace a culture that puts people first, merits before seniority and talent before tenure. Being a startup, the best part is 360 degree learning aspect for a growing individual. We believe that acknowledging one’s effort, gives a sense of belongingness and family, which help us strengthen our bonds and thus gives value to our mission.</p>
						<p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				
					</div>
                </div>
			</div>
		</section>  
		{/* <!-- Careers-Social Media --> */}
		<section className="content-inner"> 
			<div className="container"> 

            <div className="section-head style-3 text-center">
				<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Careers</h6>
							<h3 className="text-primary">We're hiring across the board in engineering, marketing and ops.</h3>
						</div>
				</div> 
                <div className="row align-items-center">
                <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1 mb-4">
							 
							<h2 className="title text-primary">Social Media Marketing Specialist </h2>
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
				<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src="images/about/social.png" className="move-1" alt=""/>
						</div>
					</div>
                 </div> 
			 
			</div>
	{/* <!-- Creative Design Specialist --> */}

            <div className="container"> 

            <div className="section-head style-3 text-center">
			 
				</div> 
                <div className="row align-items-center">
                <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                <div className="section-head style-1 mb-4">
							 
							<h2 className="title text-primary">Creative Design Specialist </h2>
						</div>
                        <p>Location: Bangalore, Karnataka, India.</p>
                        <h5 className='text-black'>Responsibilities</h5>
                        <ul className="list-arrow primary">
									<li>Knows click through enticement by means of innovative, concise and attractive designing of creatives.</li>
									<li>Successfully manage and coordinate graphic design projects from concept through completion.</li>
									<li>Work closely with marketing team to create vision, conceive designs, and consistently meet deadlines and requirements.</li>
									<li>Interact with internal as well as external stakeholders for design briefs & clarifications.</li>
                                    <li>Work closely with principal architect on building creative algorithms for video previews</li>
                                    <li>Conceptualizing, creating and executing high end design in promotional, editorial/branding related material like banners, e-mailers, app notifications, banners, show posters etc.</li>
						</ul>
                        <h5 className='text-black'>Basic Requirement</h5>
                        <ul className="list-arrow primary">
									<li>Graduate in any discipline, but must be a lover of Media/OTT content.</li>
									<li>2 to 5 years of Social Media handling experience.</li>
									<li>Writing and Reading skills is mandatory.</li>
									<li>Practical Knowledge of Creative Designing Software's is a MUST such as Adobe, Coral etc.</li>
						</ul>
					</div>
				<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src="images/about/Design.png" className="move-1" alt=""/>
						</div>
					</div>
                 </div> 
			 
			</div>
		</section>  


		<Quote/> 
            </div>
            <Footer />
        </>
    );
}

export default CC;
