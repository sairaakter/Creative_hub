import ban_img from "../assets/ban_img.png";
import hbnary from "../style/Hbanner.module.css";
import Comonbtn from "./Comonbtn";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "./Varient";

export default function Hbanner() {
  return (
    <div className={hbnary.banner}>
      <div className="container ban_container">
        <div className="row">
          <div className="col-lg-6">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={hbnary.banner_content}>
                <h2>Smart Solutions</h2>
                <h1>
                  We're The Best Tech Leading
                  <br /> Company In Bangladesh
                </h1>
                <p>
                  We help businesses grow with modern websites, Web3 solutions,
                  mobile apps, and result-driven UI/UX design. From idea to
                  launch — we build digital products that perform.
                </p>

                <div className={hbnary.gapss}>
                  {/* <!-- comonbtn --> */}
                  <Comonbtn child="Start Your Project" icon="→" />
                  {/* <!-- comonbtn --> */}
                  <Comonbtn
                    child="View Our Work"
                    icon=""
                    classNamee={hbnary.clastwo}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={hbnary.ban_img}>
                <img src={ban_img} className="img-fluid" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
