import locaton from "../assets/locaton.png";
import navy from "../style/Nav.module.css";
export default function Comonbtn({ child, icon, classNamee, locat }) {
  return (
    <a href="#" className={`${navy.btn_arrow} ${classNamee}`}>
      {locat && <img src={locaton} />}
      {child}
      <span className={navy.arrow}>{icon}</span>
    </a>
  );
}
