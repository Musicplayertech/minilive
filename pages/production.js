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

function Production() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white"> 
	{/* <!-- Production --> */}
            <section className="content-inner-2"> 
			<div className="container">  
            <div className="section-head style-3 text-center">
				<div className="section-head style-1">
							{/* <h6 className="sub-title bgl-primary m-b20 text-primary">Production</h6> */}
							<h4 className=" ">We Provides solutions for : Feature Films, Ad Films, Web Series, Short Films, Music Albums &  AV Creation.</h4>
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/production/featurefilms.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title ">Feature Films</h2>
                         </div>
                        <p>A feature film or feature-length film is a narrative film with a running time long enough to be considered the principal or sole presentation in a commercial entertainment program.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>
<br/>
    {/* Ad Films */} 
			 
                <div className="row align-items-center">
				  
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">Ad Films</h2>
                         </div>
                        <p>Ad films are a creative way of reaching out to the audience with your product without barraging them with loads of information.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>

                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/production/adfilms.jpg" className="" alt=""/>
						</div>
					</div>
                    
                </div>
<br/>

 {/*Web Series*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/production/web-series.jpg" className=" " alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">Web Series</h2>
                         </div>
                        <p>A web series is simply a series of web videos, usually in serial form, posted on the Internet.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div><br/>

  {/* Short Films */} 
			 
  <div className="row align-items-center">
				  
                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                  <div className="section-head style-1 mb-4">
                           
                           <h2 className="title ">Short Films</h2>
                       </div>
                      <p>A short film is any motion picture that is short enough in running time not to be considered a feature film. The Academy of Motion Picture Arts and Sciences.</p>
                      {/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
                      <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
               */}
                  </div>

                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                       <div className="dz-media">
                          <img src="images/production/shortfilm.png" className="" alt=""/>
                      </div>
                  </div>
                  
              </div><br/>
 {/* Music Albums */} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/production/musicalbum.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title  ">Music Albums</h2>
                         </div>
                        <p>You can easily play any song, artist, or album from its entire catalog without having to pay for a subscription or locked into a shuffle huddle.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>
                <br/>
{/* Albums */} 
			 
 <div className="row align-items-center">
				 
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title">Albums</h2>
                         </div>
                        <p>You can easily play any song, artist, or album from its entire catalog without having to pay for a subscription or locked into a shuffle huddle.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/production/malbum.jpg" className="" alt=""/>
						</div>
					</div>
                </div>


			</div>

		</section>  
            </div><br/>
            <Footer />
        </>
    );
}

export default Production;
