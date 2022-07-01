import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

function AboutUs() {
    const [isOpen, setOpen] = useState(false)
    return (
      <>  
          <section className="content-inner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">  

						<div className="video-bx style-2">
							<img src="images/about/about-yt.jpg" alt=""/>
							<div className="video-btn">
								<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
								
							</div>
						</div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="O4-LSC_qEDk" onClose={() => setOpen(false)} />
				 

                      </div>
                      <div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                          <div className="section-head style-1 mb-4">
                              {/* <h6 className="sub-title bgl-primary m-b20 text-primary">About Us</h6> */}
                              <h2 className="title text-primary">Every Personnel teamed here, has a 100% motive to ENTERTAIN.</h2>
                          </div>
                          <p>This app has been created with a goal to have FULL TIME ENTERTAINMENT for our audience . This will boost “Self-Reliant India and Vocal for Local”. Through ‘MiniLive App’, you can Entertain and be Famous, along with Infotainment.
</p>
                          <p className="m-b30">Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.</p>
                          {/* <img src="images/sign.png" alt=""/> */}
                         {/* <h4 className="m-b30 text-primary">FOUNDER & CEO - BRIJESH KASHYAP</h4>
                          <Link href="about-us"><a  className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>About Us</a></Link>  */}
                      </div>
                  </div>
              </div>
          </section>
      </>
    )
  }
  
  export default AboutUs;