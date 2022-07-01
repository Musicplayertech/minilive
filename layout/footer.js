function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"backgroundImage":"url(images/background/footer-bg.png)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row align-items-center">
						<div className="col-xl-6 col-md-4">
							<div className="footer-logo">
								<a href="/"><img src="images/Minilive-logo-black.png" alt="" width={174} height={70} /></a> 
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
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<h5 className="footer-title">Offices</h5>
							<p><h5> Bengaluru -</h5> No. 45/B, Shubham Complex, 1st A Main, 3rd Floor, Rear Wing, Sarakki Industrial Layout, 3rd Phase, 
								J. P. Nagar, Bengaluru, Karnataka 560078. <br/> <h5>Mumbai -</h5> Advent Atria Tower, 503, Chincholi Bunder Rd, opp. Kingston Height, Malad West, Mumbai, Maharashtra 400064.</p>
							<div className="dlab-social-icon">
								<ul>
									<li><a className="fa fa-facebook" href="https://www.facebook.com/MiniLiveApp/" target="_blanck"></a></li>
									<li><a className="fa fa-instagram" href="https://www.instagram.com/miniliveapp/" target="_blanck"></a></li>
									<li><a className="fa fa-twitter" href="https://twitter.com/MiniLiveApp"  target="_blanck"></a></li>
									<li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/minilive/"  target="_blanck"></a></li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our links</h5>
							<ul>
								<li><a href="javascript:void(0);">Home</a></li>
								<li><a href="javascript:void(0);">About Us</a></li>
								<li><a href="javascript:void(0);">Services</a></li>
								<li><a href="javascript:void(0);">Team</a></li>
								<li><a href="javascript:void(0);">Blog</a></li>
							</ul>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
						<div className="widget widget_services">
							<h5 className="footer-title">Our Services</h5>
							<ul>
								<li><a href="javascript:void(0);">MiniPIX</a></li>
								<li><a href="javascript:void(0);">Minilive</a></li>
								<li><a href="javascript:void(0);">Minilive Studio</a></li>
								<li><a href="javascript:void(0);">Production</a></li>
								<li><a href="javascript:void(0);">Branding </a></li>
							</ul>
						</div>
                    </div> 
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2022 <a href="https://minilive.in/" target="_blank">Intellogic Innovations Pvt Ltd.</a>. All rights reserved.</span> 
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