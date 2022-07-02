import { useEffect, useState } from "react";
// import { WOW } from "wowjs";

function Service() {
  const [open, setOpen] = useState("p2");
  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });

  //   wow.init();
  // }, []);
  return (
    <>
      <section
        className="content-inner-2 wow fadeInUp"
        // style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              Products & Services
            </h6>
            <h2 className="title text-primary">Hum hain " Dil Se Desi "</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div 
                // className="icon-bx-md 
                // radius bg-yellow shadow-yellow"
                >
                  {/* <a href="javascript:void(0);" className="icon-cell"> */}
                    {/* <i className="fa fa-play-circle"></i> 
                     </a> */}
                    <img src="images/Services/minipix.png"/>
                 
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">MiniPIX</h4>
                  <p>
                  Our Services are built to be for Every Common Person’s ENTERTAINMENT reach with a catalogue of Movies, Series, Short Films and Songs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30  "
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div>
                {/* //  className="icon-bx-md radius bg-red shadow-red">
                //   <a href="javascript:void(0);" className="icon-cell">
                //     <i className="flaticon-website"></i>
                //   </a> */}
                 <img src="images/Services/minilive.png"/>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">MiniLive</h4>
                  <p>
                  MiniLive-An Indian Short Video App, Come & Hop On ! To A Fun Filled FULL Time Entertainment Journey With Our Product & Services.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
               <div>
                {/* //  className="icon-bx-md radius bg-red shadow-red">
                //   <a href="javascript:void(0);" className="icon-cell">
                //     <i className="flaticon-website"></i>
                //   </a> */}
                 <img src="images/Services/studio.png"/>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">MiniLive Studios</h4>
                  <p>
                  We Provides solutions for all broadcast needs: Recording Studio, Online Edits, Offline Edits, DI, VFX & more.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div>
                {/* //  className="icon-bx-md radius bg-red shadow-red">
                //   <a href="javascript:void(0);" className="icon-cell">
                //     <i className="flaticon-website"></i>
                //   </a> */}
                 <img src="images/Services/production.png"/>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Production</h4>
                  <p>
                  We Provides solutions for all broadcast needs: Feature Films, Ad Films, Web Series, Short Films, Music Albums, AV Creation & more.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div>
                {/* //  className="icon-bx-md radius bg-red shadow-red">
                //   <a href="javascript:void(0);" className="icon-cell">
                //     <i className="flaticon-website"></i>
                //   </a> */}
                 <img src="images/Services/branding.png"/>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Branding</h4>
                  <p>
                  We Provides solutions for all broadcast needs: In-Film Branding, Advertising, Sponsorship, Media Partnership & more.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div>
                {/* //  className="icon-bx-md radius bg-red shadow-red">
                //   <a href="javascript:void(0);" className="icon-cell">
                //     <i className="flaticon-website"></i>
                //   </a> */}
                 <img src="images/Services/support.png"/>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">24X7 Support</h4>
                  <p>
                  Please feel free to write to us at connect@minilive.in for any feedback or queries. 
                   It will help us reach out to you quickly.

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Service;
