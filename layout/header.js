import Link from 'next/link';
import { useState } from 'react';
function Header() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
      <>
        {/* <!-- Header --> */}
        <header className="site-header header-transparent text-black mo-left" id="fix-header">
            {/* <!-- Main Header --> */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix ">
                    <div className="container clearfix">
                        {/* <!-- Website Logo --> */}
                        <div className="logo-header mostion logo-dark">
                           <Link href="/"><a><img src="images/Minilive-logo-black.png" alt=""/></a></Link>
                        </div>
                        {/* <!-- Nav Toggle Button --> */}
                        <button className={`navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`} onClick={() => setShow(!show)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        {/* <!-- Extra Nav --> */}
                        <div className="extra-nav">
                            {/* <div className="extra-cell">
                                <Link href="contact-us-1"><a className="btn btn-link d-inline-flex align-items-center"><i className="fa fa-angle-right m-r10"></i>Get A Quote</a></Link>
                            </div> */}
                        </div>
                        <div className={`header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`} id="navbarNavDropdown">
                            <div className="logo-header">
                                <Link href="/"><a><img src="images/Minilive-logo-black.png" alt=""/></a></Link>
                            </div>
                            <ul className="nav navbar-nav navbar">
                                <li><Link href="/"><a>Home</a></Link></li>
                                {/* <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-us-1"><a>About Us</a></Link></li>
										<li><Link href="/faq-1"><a>Faq</a></Link></li>
                                        <li><Link href="/pricing-table-1"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-1"><a>Team</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li> */}
                                <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Products & Services</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu"> 
                                    <li> <a href="https://minipix.in/" target='_blank'>MiniPIX</a> </li>
                                    <li><Link href="/"><a>MiniLive</a></Link></li>
                                    <li><Link href="/minilive-studios"><a>MiniLive Studios</a></Link></li>
                                    <li><Link href="/production"><a>Production</a></Link></li>
                                    <li><Link href="/branding"><a>Branding</a></Link></li>

										{/* <li><Link href="/services-1"><a>Services</a></Link></li>
										<li><Link href="/services-details-1"><a>Services Details</a></Link></li> */}
                                    </ul>
                                </li>
                                {/*
                                <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/blog-large-right-sidebar"><a>Large Right Sidebar</a></Link></li>
										<li><Link href="/blog-details-1"><a>Blog Details</a></Link></li>
                                    </ul>
                                </li>
                                 */}
                               
                                <li className={`${open === "aboutus" ? "open" : ""}`}><a onClick={() => setOpen("aboutus")}><span>About Us</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-us"><a>About US</a></Link></li> 
                                        <li><Link href="/team"><a>Core Team</a></Link></li>
                                        <li><Link href="/culture-careers"><a>Culture & Careers</a></Link></li>  
                                        
                                    </ul>
                                </li>
                                
								<li><Link href="/contact-us"><a>Contact Us</a></Link></li>
                              
                                <li><Link href="/media"><a>Media</a></Link></li> 
                            </ul>
                            <div className="dlab-social-icon">
                                <ul>
                                <li><a href="https://www.facebook.com/MiniLiveApp/" target="_blanck"><img src="images/social/fb.png" width={35} height={35}/></a></li>
									<li><a href="https://twitter.com/MiniLiveApp"  target="_blanck"><img src="images/social/twitter.png" width={35} height={35}/></a></li>
									<li> <a href="https://www.linkedin.com/company/minilive/"  target="_blanck"><img src="images/social/in.png" width={35} height={35}/></a></li>
									<li> <a href="https://www.instagram.com/miniliveapp/" target="_blanck"><img src="images/social/insta.png" width={30} height={30} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Main Header End --> */}
        </header>
        {/* <!-- Header End --> */}

      </>
    )
  }

  export default Header;

