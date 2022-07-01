import Link from "next/link";
import Quote from "../element/quote";
import Footer from "../layout/footer";
import Header from "../layout/header";


function ChannelPartner() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white"> 
      <section className="content-inner-2">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Channel Partner Program</h6>
								<p>Be Our Partner And Take Your Business To Next Level.


<br/><span className="text-primary ">Fill the form below or mail us @ - connect@minilive.in</span></p>
							</div>
							<form className="dlab-form dzForm" method="POST" action="script/contact.php">
								<div className="dzFormMsg"></div>
								<input type="hidden" className="form-control" name="dzToDo" value="Contact" />
								<div className="row">
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzName" type="text" required className="form-control" placeholder="First Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-user"></i></span>
											</div>
											<input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-envelope"></i></span>
											</div>
											<input name="dzEmail" type="text" required className="form-control" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-phone"></i></span>
											</div>
											<input name="dzOther[phone]" type="text" required className="form-control" placeholder="Phone No." />
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file-alt"></i></span>
											</div>
											<input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Title" />
										</div>
									</div>
									{/* <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-list"></i></span>
											</div>
											<select name="dzOther[choose_service]" className="form-control" required>
												<option selected>Products/Services</option>
												<option value="1">Minilive - Short Videos</option>
												<option value="2">MiniPIX</option>
												<option value="3">MiniLive Studios</option>
												<option value="3">Production</option>
												<option value="3">Branding</option>
											</select>
										</div>
									</div> */}
									<div className="col-sm-12">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-sms"></i></span>
											</div>
											<textarea name="dzMessage" required className="form-control" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="input-group">
											<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
											<input className="form-control d-none" style={{ "display": "none" }} data-recaptcha="true" required data-error="Please complete the Captcha" />
										</div>
									</div>
									{/* <ReCAPTCHA
										sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
										onChange={onChange}
									/> */}
									<div className="col-sm-12 mt-2">
										<button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
							<div className="dlab-media cf-r-img">
								<img src="images/about/partner.png" className="move-1" alt="Channel Partner Program" />
							</div>
						</div>
					</div>
				</div>
			 

{/*------------------------- Partner Benefits-------------------------------------------------------------- */}

		 
			<div className="container">
				<div className="section-head style-3 text-center">
				<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Partner Benefits</h6>
							<h3 className="text-primary">Building values and successes together.</h3>
						</div>
				</div>
				<div className="row align-items-center about-wraper-2">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper  left m-b50 icon-up">
									<div className="icon-bx-sm radius bg-primary shadow-primary m-b20 "> 
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-fort-awesome" aria-hidden="true"></i>
											</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Lower Territorial Competition</h4>
										<p>
										We ensure you to provide with the lowest territorial competition.
											</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
								<div className="icon-bx-wraper left m-b50 icon-up">
								<div className="icon-bx-sm radius  bg-primary shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-user" aria-hidden="true"></i>
											</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Dedicated Account Manager</h4>
										<p>
										Assigning dedicated account manager to each of our CPs so that their issues can be resolved promptly.
											</p>
									</div>
								</div>
							</div>


						</div>
					</div>
					<div className="col-lg-4 wow zoomIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media text-center m-b30">
							<img src="images/about/partner2.png" className="move-1" alt=""/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
						<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius  bg-primary shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-users" aria-hidden="true"></i>
											</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Product & Solution Training </h4>
										<p>
										Entire training on the products and solutions are provided to the CPs during the initial period.
											</p>
									</div>
								</div>
							</div>
							
							<div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
								<div className="icon-bx-wraper left m-b50 icon-up">
									<div className="icon-bx-sm radius  bg-primary shadow-primary m-b20"> 
										<a href="javascript:void(0);" className="icon-cell text-white">
										<i class="fa fa-usd" aria-hidden="true"></i>
												</a> 
									</div>
									<div className="icon-content">
										<h4 className="dlab-tilte text-capitalize">Attractive Commission</h4>
										<p>
										Our commission structure is designed in such a way that you just can’t resist selling more and more products.
										 	</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> 
 
	</div>
	<Footer/>
    </>
  )
}

export default ChannelPartner;