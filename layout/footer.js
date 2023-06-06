function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" 
	 style={{"backgroundImage":"url(images/main-slider/slider1/bg2.jpg)"}}
	>
		<div className="footer-top">
<div className="container">

			{/* <div className=" " data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="">
								<a href="/"><img src="images/Minilive-m-black.png" alt="MiniLive-Logo" width={120} height={50} /></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							  <div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
				            				</div>
								<div className="icon-content">
									
					            <p>connect@minilive.in</p>
								</div>
							</div>  
						</div> 
						<div className="col-xl-3 col-md-4 col-sm-6">
						<div className="icon">
								<ul>
									<li><a href="https://www.facebook.com/MiniLiveApp/" target="_blanck"><img src="images/social/fb.png" width={35} height={35}/></a>
									 <a href="https://twitter.com/MiniLiveApp"  target="_blanck"><img src="images/social/twitter.png" width={35} height={35}/></a> 
									 <a href="https://www.linkedin.com/company/minilive/"  target="_blanck"><img src="images/social/in.png" width={35} height={35}/></a> 
									 <a href="https://www.instagram.com/miniliveapp/" target="_blanck"><img src="images/social/insta.png" width={30} height={30} /></a> 
									 </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				 */}
				<div className="row">
					<div className="col-xl-6 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h3 className="text-primary">Offices</h3><hr/>
							<p>
							 
								  <b > Bengaluru -</b> No. 45/B, Shubham Complex, 1st A Main, 3rd Floor, Rear Wing, Sarakki Industrial Layout, 3rd Phase, 
								J. P. Nagar, Bengaluru, Karnataka 560078. <br/><br/>
								 
								  <b>Mumbai -</b> Advent Atria Tower, 503, Chincholi Bunder Rd, opp. Kingston Height, Malad West, Mumbai, Maharashtra 400064.
								 
							</p>
							
								<ul>
									<li><a href="https://www.facebook.com/MiniLiveApp/" target="_blanck"><img src="images/social/fb.png" width={35} height={35}/></a>
									 <a href="https://twitter.com/MiniLiveApp"  target="_blanck"><img src="images/social/twitter.png" width={35} height={35}/></a> 
									 <a href="https://www.linkedin.com/company/minilive/"  target="_blanck"><img src="images/social/in.png" width={35} height={35}/></a> 
									 <a href="https://www.instagram.com/miniliveapp/" target="_blanck"><img src="images/social/insta.png" width={30} height={30} /></a> 
									 </li>
								</ul>
						</div>
						<div>
								
							</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
						<h3 className="text-primary">Our links</h3><hr/>
							<ul>
								<li ><a href="/" className="text-black">Home</a></li> 
								<li><a href="/media" className="text-black">Media</a></li>
								<li><a href="/team" className="text-black">Our Team</a></li>
								<li><a href="/about-us" className="text-black">About Us</a></li>
								<li><a href="/contact-us" className="text-black">Contact Us</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
						<h3 className="text-primary">Services</h3><hr/>
							<ul>
								<li><a href="https://beta.minipix.in" target="_blank" className="text-black">MiniPIX</a></li>
								<li><a href="/" className="text-black">MiniLive</a></li>
								<li><a href="/minilive-studios" className="text-black">Minilive Studio</a></li>
								<li><a href="/production" className="text-black">Production</a></li>
								<li><a href="/branding" className="text-black">Branding </a></li>
							</ul>
						</div>
                    </div> 
                </div>
				 <hr/>
				<div className="row">
                    <div className="col-sm-12 text-center"> 
					<p > Copyright © 2023 <span className="text-primary"> Intellogic Innovations Pvt Ltd.</span> All Rights Reserved. </p> 
					</div>
                </div>
            </div>
        </div> 
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;