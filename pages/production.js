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
							<h6 className="sub-title bgl-primary m-b20 text-primary">Production</h6>
							<h3 className="text-primary">We Provides solutions for all broadcast needs: Feature Films, Ad Films, Web Series, Short Films, Music Albums, AV Creation & more.</h3>
						</div>
				</div> 
                <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/FeatureFilms.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Feature Films</h2>
                         </div>
                        <p>A feature film or feature-length film is a narrative film with a running time long enough to be considered the principal or sole presentation in a commercial entertainment program.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>

    {/* Ad Films */} 
			 
                <div className="row align-items-center">
				  
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Ad Films</h2>
                         </div>
                        <p>Ad films are a creative way of reaching out to the audience with your product without barraging them with loads of information.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>

                    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/AdFilms.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                </div>


 {/*Web Series*/} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/WebSeries.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Web Series</h2>
                         </div>
                        <p>A web series is simply a series of web videos, usually in serial form, posted on the Internet.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>

  {/* Short Films */} 
			 
  <div className="row align-items-center">
				  
                  <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                  <div className="section-head style-1 mb-4">
                           
                           <h2 className="title text-primary">Short Films</h2>
                       </div>
                      <p>A short film is any motion picture that is short enough in running time not to be considered a feature film. The Academy of Motion Picture Arts and Sciences.</p>
                      {/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
                      <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
               */}
                  </div>

                  <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                       <div className="dz-media">
                          <img src="images/about/ShortFilms.png" className="move-1" alt=""/>
                      </div>
                  </div>
                  
              </div>
 {/* Music Albums */} 
			 
 <div className="row align-items-center">
				    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/MusicAlbums.png" className="move-1" alt=""/>
						</div>
					</div>
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Music Albums</h2>
                         </div>
                        <p>You can easily play any song, artist, or album from its entire catalog without having to pay for a subscription or locked into a shuffle huddle.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                </div>

{/* Albums */} 
			 
 <div className="row align-items-center">
				 
                    
                    <div className="col-lg-8 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s"> 
                    <div className="section-head style-1 mb-4">
							 
                             <h2 className="title text-primary">Albums</h2>
                         </div>
                        <p>You can easily play any song, artist, or album from its entire catalog without having to pay for a subscription or locked into a shuffle huddle.</p>
						{/* <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.</p>
						<p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
				 */}
					</div>
                    <div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
                         <div className="dz-media">
							<img src="images/about/Albums.png" className="move-1" alt=""/>
						</div>
					</div>
                </div>


			</div>

		</section>  
            </div>
            <Footer />
        </>
    );
}

export default Production;
