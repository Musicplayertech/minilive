import Link from "next/link";
import Slider from "react-slick";


function Slider1 () {
    return (
      <>
        <div className="banner-one" 
		 style={{"backgroundImage":"url(images/main-slider/slider1/bg2.jpg)"}}
		>
			<div className="container">
				<div className="banner-inner">
					{/* <div className="img1"><img src="images/main-slider/slider1/pic3.png" alt=""/></div>
					<div className="img2"><img src="images/main-slider/slider1/pic4.png" alt=""/></div> */}
					<div className="row align-items-center">
					
						<div className="col-md-6">
							<div className="banner-content text-center">
								<h1 data-wow-duration="1s" data-wow-delay="0.5s" className="wow fadeInUp title text-primary">MiniLive</h1>
								<h3 data-wow-duration="1.2s" data-wow-delay="1s" className="wow fadeInUp "> Intellectual, logical, <span className="text-primary">Innovations !</span></h3>
								<h5  data-wow-duration="1.4s" data-wow-delay="1.5s" className="wow fadeInUp ">Every Personnel teamed here, has a 100% motive to ENTERTAIN.</h5>
 
								<a href="https://play.google.com/store/apps/details?id=com.minilive&hl=en_IN" target="_blank"><img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" alt="Google Play" width="175" height="auto" /> </a>
								<a href="https://www.apple.com/in/app-store/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width="150" height="auto"  /></a>
   
						</div>
					</div>
					<div className="col-md-6">
							<div className="dz-media move-box wow fadeIn" data-wow-duration="1.6s" data-wow-delay="0.8s" >
								{/* <img className="move-1" src="images/move/pic1.png" alt=""/> */}
								<img className="move-1" src="images/move/Minilive_home.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
      </>
    )
  }

  export default Slider1;