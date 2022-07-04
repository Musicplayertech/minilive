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

function MiniliveStudios() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Header />
            <div className="page-content bg-white"> 
	{/* <!-- MiniLive Studios --> */}
            <section className="content-inner-2"> 
			<div className="container">  
            <div className="section-head style-3 text-center">
				<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">MiniLive Studios</h6>
							<h3 className="text-primary">We Provides solutions for all broadcast needs: Recording Studio, Online Edits, Offline Edits, DI, VFX & more.</h3>
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/RecordingStudio.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Recording Studio</h2>
                         </div>
                        <p>Our Studio Facilities Include Sync Sound, Dubbing, Pre-Mix, Sound
Design, 5.1 Surround Sound, Final Mixing & Music Recording, Mixing and Mastering.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>

    {/* Online Edits */} 
			 
                <div className="row align-items-center">
				  
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Online Edits</h2>
                         </div>
                        <p>Online editing is a post-production linear video editing process that is performed in the final stage of a video production. It occurs after offline editing.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>

                    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/OnlineEdits.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                </div>


 {/* Offline Edits*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/OfflineEdits.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Offline Edits</h2>
                         </div>
                        <p>Offline editing is part of the post-production process of filmmaking and television production in which raw footage is copied and edited, without affecting the camera original. Once the project has been completely offline edited, the original media will be assembled in the online editing stage.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>

  {/* DI Edits */} 
			 
  <div className="row align-items-center">
				  
                  <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                  <div className="section-head style-1 mb-4">
                           
                           <h2 className="title text-primary">DI</h2>
                       </div>
                      <p>The world’s most powerful colour grading and finishing system for film, TV, commercials and broadcast.</p>
                      {/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
                      <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
               */}
                  </div>

                  <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                       <div className="dz-media">
                          <img src="images/about/DI.png" className="move-1" alt=""/>
                      </div>
                  </div>
                  
              </div>
 {/* VFX Edits*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/vfx.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">VFX</h2>
                         </div>
                        <p>Motion graphics are graphics that use video footage and/or animation technology to create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>


			</div>

		</section>  
            </div>
            <Footer />
        </>
    );
}

export default MiniliveStudios;
