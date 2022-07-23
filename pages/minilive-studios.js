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
				<div className="section-head style-1"><br/>
							<h6 className="sub-title bgl-primary m-b20 text-primary">MiniLive Studios</h6>
                            <h3 className="">We Provides solutions for : Recording Studios, Online Edits, Offline Edits, DI, VFX & more.</h3>
						</div>
				</div>
             
                <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/minilivestudios/RecordingStudio.jpg" className="" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title ">Recording Studios</h2>
                         </div>
                        <p>Our Studio Facilities -</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */} 
                 <div className='row'>
                 <div className='col-lg-6 wow zoomIn' >
                        <ul className="list-arrow primary">
									<li>SYNC SOUND</li>
									<li>DUBBING</li>
									<li>PRE-MIX</li>
									<li>SOUND DESIGN.</li>
                                     
						</ul>
                        
                  </div>
                  <div className='col-lg-6 wow zoomIn' >
                        <ul className="list-arrow primary">
								 
                                    <li>5.1 SURROUND SOUND.</li>
                                    <li>FINAL MIXING</li>
                                    <li>MUSIC RECORDING, MIXING AND MASTERING</li>
						</ul>
                        
                  </div>
                  </div>
					</div>
                </div><br/>

    {/* Online Edits */} 
			 
                <div className="row align-items-center">
				  
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title ">Online Edits</h2>
                         </div>
                        <p>Online editing is a post-production linear video editing process that is performed in the final stage of a video production. It occurs after offline editing.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>

                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/minilivestudios/OnlineEdit.jpg" className=" " alt=""/>
						</div>
					</div>
                    
                </div><br/>


 {/* Offline Edits*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/minilivestudios/OflineEdits.jpg" className=""   alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title ">Offline Edits</h2>
                         </div>
                        <p>Offline editing is part of the post-production process of filmmaking and television production in which raw footage is copied and edited, without affecting the camera original. Once the project has been completely offline edited, the original media will be assembled in the online editing stage.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>
                <br/>
  {/* DI Edits */} 
			 
  <div className="row align-items-center">
				  
                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                  <div className="section-head style-1 mb-4">
                           
                           <h2 className="title ">DI</h2>
                       </div>
                      <p>The world’s most powerful colour grading and finishing system for film, TV, commercials and broadcast.</p>
                      {/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
                      <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
               */}
                  </div>

                  <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                       <div className="dz-media">
                          <img src="images/minilivestudios/DI.jpg" className="" alt=""/>
                      </div>
                  </div>
                  
              </div>
 {/* VFX Edits*/} <br/>
			 
 <div className="row align-items-center">
				    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/minilivestudios/MSVFX.jpg" className=""  alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-6 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title ">VFX</h2>
                         </div>
                        <p>Motion graphics are graphics that use video footage and/or animation technology to create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>


			</div>

		</section>  
            </div><br/><br/>
            <Footer />
        </>
    );
}

export default MiniliveStudios;
