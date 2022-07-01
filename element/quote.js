import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
	console.log("Captcha value:", value);
  }

function Quote() {
	return (
		<>
			<section className="content-inner">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
							<div className="section-head style-1">
								<h6 className="sub-title bgl-primary m-b20 text-primary">Contact Us</h6>
								<p>When there are great ideas at stake, it’s always a good idea to share. Tell us how can we make it happen for you!

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
									<div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file-alt"></i></span>
											</div>
											<input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Title" />
										</div>
									</div>
									<div className="col-sm-6">
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
									</div>
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
								<img src="images/about/contact-us.png" className="move-1" alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Quote;