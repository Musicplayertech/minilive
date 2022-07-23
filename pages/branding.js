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

function Branding() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white"> 
	{/* <!-- Branding --> */}
            <section className="content-inner-2"> 
			<div className="container">  
            <div className="section-head style-3 text-center">
				<div className="section-head style-1"><br/>
						  <h6 className="sub-title bgl-primary m-b20 text-primary">Branding</h6>  
							<h3 className=" ">We Provides solutions for : In-Film Branding, Advertising, Sponsorship, Media Partnership & more.</h3>
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/branding/filmbranding.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">In-Film Branding</h2>
                         </div>
                        <p>In-Film Branding is nothing but marketing brands through movies. Consumers are exhausted of traditional brand communication and they desire to receive communication in an entertaining and enjoyable way. We provide an innovative stage for brands to reach their potential consumers.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div><br/>

    {/* Advertising */} 
			 
                <div className="row align-items-center">
				  
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">Advertising</h2>
                         </div>
                        <p>Ad films are a creative way of reaching out to the audience with your product without barraging them with loads of information.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>

                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
						 
                         <img src="images/branding/ads.jpg" className="" alt=""/>
						</div>
					</div>
                    
                </div>
<br/>

 {/*Sponsorship*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/branding/msponser.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">Sponsorship</h2>
                         </div>
                        <p>A sponsorship is when a company commits money or resources to a nonprofit event or program in exchange for specific promotional benefits. In exchange for supporting the nonprofit, the company gets their name and logo on things like: Banners.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div><br/>

  {/* Media Partnership */} 
			 
  <div className="row align-items-center">
				  
                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                  <div className="section-head style-1 mb-4">
                           
                           <h2 className="title ">Media Partnership</h2>
                       </div>
                      <p>A media partnership is a collaboration between two organizations (one of them is a media outlet) that can help each other by using promotion and raising visibility & credibility.</p>
                      {/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
                      <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
               */}
                  </div>

                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                       <div className="dz-media">
                          <img src="images/branding/mpartner.jpg" className="" alt=""/>
                      </div>
                  </div>
                  
              </div> 
			</div>

		</section>  
            </div><br/><br/>
            <Footer />
        </>
    );
}

export default Branding;
