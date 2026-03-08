import abgrp from "../assets/abgrp.png";
import signn from "../assets/signn.png";
import techy from "../style/Technology.module.css";

export default function Technology() {
  return (
    <div className={techy.technology}>
      <div className="container ban_container">
        <div className={`row ${techy.cust_hrow}`}>
          <div className="col-lg-6 col-md-12">
            <div className={techy.ha_cont}>
              <div className={techy.ha_ttl}>
                <h2>ABOUT US</h2>
                <div className={techy.line}></div>
              </div>
              <h3>
                We're leading The Power
                <br /> Of Technology
              </h3>
              <p>
                Harnessing innovation and cutting-edge technology, we deliver
                smart solutions that empower businesses, enhance productivity,
                and drive growth. Our expertise transforms ideas into digital
                realities, shaping the future while connecting people,
                processes, and possibilities seamlessly
              </p>
              <div className={techy.ha_sarvic}>
                <div className={techy.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>ABest IT Solutions & Service</h4>
                </div>
                <div className={techy.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>Best IT Solutions & Service</h4>
                </div>
                <div className={techy.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>CBest IT Solutions & Service</h4>
                </div>
                <div className={techy.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>DBest IT Solutions & Service</h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="col-lg-2"></div> --> */}
          <div className="col-lg-6 col-md-12">
            <div className={techy.h_wrper}>
              <div className={techy.himg}>
                <img src={abgrp} className="img-fluid w-100" />
                {/* <!-- <img src="./image/abtwo.png" className="img-fluid"/> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
