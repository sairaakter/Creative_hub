import haimg from "../assets/haimg.png";
import signn from "../assets/signn.png";
import Haboty from "../style/Habout.module.css";

export default function Habout() {
  return (
    <div className={Haboty.habout}>
      <div className="container ban_container">
        <div className={`row ${Haboty.cust_hrow}`}>
          <div className="col-lg-6 col-md-12">
            <div className={Haboty.h_wrper}>
              <div className={Haboty.himg}>
                <img src={haimg} className="img-fluid" />
              </div>
              <div className={Haboty.e_batch}>
                <h5>07 Year's</h5>
                <h6>
                  years of experiences <br />
                  in this industry
                </h6>
              </div>
            </div>
          </div>
          {/* <!-- <div className="col-lg-2"></div> --> */}
          <div className="col-lg-6 col-md-12">
            <div className={Haboty.ha_cont}>
              <div className={Haboty.ha_ttl}>
                <h2>ABOUT US</h2>
                <div className={Haboty.line}></div>
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
              <div className={Haboty.ha_sarvic}>
                <div className={Haboty.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>ABest IT Solutions & Service</h4>
                </div>
                <div className={Haboty.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>Best IT Solutions & Service</h4>
                </div>
                <div className={Haboty.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>CBest IT Solutions & Service</h4>
                </div>
                <div className={Haboty.per_srv}>
                  <img src={signn} className="img-fluid" />
                  <h4>DBest IT Solutions & Service</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
