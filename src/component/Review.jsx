import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import award from "../assets/award.png";
import happy from "../assets/happy.png";

import complete from "../assets/complete.png";
import crevw from "../assets/crevw.png";
import revy from "../style/Review.module.css";
//count up functionality
const Counter = ({ end }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  // once: false deway eita prottek bar trigger hobe
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      // Jokhon view-te asbe, 0 theke start hobe
      const controls = animate(count, end, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    } else {
      // Jokhon view-r baire chole jabe, value reset hoye 0 hobe
      count.set(0);
    }
  }, [isInView, count, end]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};
export default function Review() {
  return (
    <div className={revy.review}>
      <div className="container ban_container">
        <div className={`row ${revy.rbg_stl}`}>
          <div className="col-lg-12">
            <div className={revy.rmain_item}>
              <div className={revy.r_item}>
                <div className={revy.r_img}>
                  <img src={award} className="img-fluid" />
                </div>
                <div className={revy.r_con}>
                  <h2>Winning award</h2>
                  <p>
                    <Counter end={30} />
                    <span>+</span>
                  </p>
                </div>
              </div>
              <div className={revy.r_item}>
                <div className={revy.r_img}>
                  <img src={happy} className="img-fluid" />
                </div>
                <div className={revy.r_con}>
                  <h2>Happy Client</h2>
                  <p>
                    <Counter end={250} />
                    <span>+</span>
                  </p>
                </div>
              </div>
              <div className={revy.r_item}>
                <div className={revy.r_img}>
                  <img src={complete} className="img-fluid" />
                </div>
                <div className={revy.r_con}>
                  <h2>Complete project</h2>
                  <p>
                    <Counter end={150} />
                    <span>+</span>
                  </p>
                </div>
              </div>
              <div className={revy.r_item}>
                <div className={revy.r_img}>
                  <img src={crevw} className="img-fluid" />
                </div>
                <div className={revy.r_con}>
                  <h2>Client review</h2>
                  <p>
                    <Counter end={100} />
                    <span>+</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
