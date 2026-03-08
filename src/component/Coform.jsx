import Cfomy from "../style/Coform.module.css";
import Cfrm_left from "./Cfrm_left";
import Cfrm_right from "./Cfrm_right";
export default function Coform() {
  return (
    <div className={Cfomy.contact}>
      <div className="container ban_container">
        <div className={`row ${Cfomy.co_wrap}`}>
          <Cfrm_left />
          <Cfrm_right />
        </div>
      </div>
    </div>
  );
}
