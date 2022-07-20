import Link from "next/link";
import Quote from "../element/quote";
import Footer from "../layout/footer";
import Header from "../layout/header";


function ContactUs1() {
  return (
    <>
	<Header/>
      <div className="page-content bg-white"  
	//    style={{"backgroundImage":"url(images/main-slider/slider1/bg2.jpg)"}}
	   >  
			<section className="content-inner-2">
				<Quote/>
		 </section>
	</div>
	<Footer/>
    </>
  )
}

export default ContactUs1;