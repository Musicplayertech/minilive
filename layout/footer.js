function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/img2.png)"}}>
		<div className="footer-top">
            <div className="container">
				
				<div className="row">
					<div className="col-xl-6 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">Offices</h5>
							<p><h5 > Bengaluru -</h5> No. 45/B, Shubham Complex, 1st A Main, 3rd Floor, Rear Wing, Sarakki Industrial Layout, 3rd Phase, 
								J. P. Nagar, Bengaluru, Karnataka 560078. <br/> <h5>Mumbai -</h5> Advent Atria Tower, 503, Chincholi Bunder Rd, opp. Kingston Height, Malad West, Mumbai, Maharashtra 400064.</p>
							 
								<div className=""> 
									<a href="javascript:void(0);" className="icon-cell text-black">
									<i class="fa fa-envelope" aria-hidden="true"> &nbsp;</i>
								 - help@minilive.in</a> 
								</div>
								 
						 
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li ><a href="/" className="text-black">Home</a></li>
								<li><a href="/about-us" className="text-black">About Us</a></li>
								<li><a href="/media" className="text-black">Media</a></li>
								<li><a href="/team" className="text-black">Our Team</a></li>
								<li><a href="/culture-careers" className="text-black">Culture & Careers</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="https://beta.minipix.in" target="_blank" className="text-black">MiniPIX</a></li>
								<li><a href="/" className="text-black">Minilive</a></li>
								<li><a href="/minilive-studios" className="text-black">Minilive Studio</a></li>
								<li><a href="/production" className="text-black">Production</a></li>
								<li><a href="/branding" className="text-black">Branding </a></li>
							</ul>
						</div>
                    </div> 
                </div>
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="">
								<a href="/"><img src="images/Minilive-white.png" alt="MiniLive-Logo" width={120} height={50} /></a> 
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
							{/* <div className="icon-bx-wraper left m-b10">
								<div className="icon-lg"> 
									<a href="javascript:void(0);" className="icon-cell">
										<i className="flaticon-email"></i>
									</a> 
								</div>
								<div className="icon-content">
									
					            <p>connect@minilive.in</p>
								</div>
							</div> */}
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6">
						<div className="icon">
								<ul>
									<li><a href="https://www.facebook.com/MiniLiveApp/" target="_blanck"><img src="images/social/fb.png"/></a>
									 <a href="https://twitter.com/MiniLiveApp"  target="_blanck"><img src="images/social/twitter.png"/></a> 
									 <a href="https://www.linkedin.com/company/minilive/"  target="_blanck"><img src="images/social/in.png"/></a> 
									 <a href="https://www.instagram.com/miniliveapp/" target="_blanck"><img src="images/social/insta.png"/></a> 
									 </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
                    <div className="col-sm-12 text-center"> 
					<p > Copyright © 2022 <span className="text-primary"> Intellogic Innovations Pvt Ltd.</span> All rights reserved. </p> 
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