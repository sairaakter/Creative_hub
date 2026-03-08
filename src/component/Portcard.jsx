import porsty from "../style/Portfolio.module.css";
import Comonbtn from "./Comonbtn";

export default function Portcard({ link, description, bgColor, imgg }) {
  return (
    <div className={porsty.port_item} style={{ backgroundColor: bgColor }}>
      <div className={porsty.pt_prt}>
        <img src={imgg} className="img-fluid" />
      </div>
      <div className={porsty.pb_prt}>
        <a
          href="https://tenstagematrix.com/"
          target="_blank"
          className={porsty.links}
        >
          {link}
        </a>
        <p>{description}</p>
        <div className={porsty.p_btns}>
          {/* <!-- comonbtn --> */}
          <Comonbtn
            child="Click Hear"
            classNamee={`${porsty.clasfor} ${porsty.clasforr}`}
            icon="→"
          />

          {/* <!-- comonbtn --> */}
          <Comonbtn
            child="Client Location From China"
            classNamee={`${porsty.clasfor} ${porsty.clasforr} ${porsty.clasforry}`}
            icon=""
            locat={true}
          />
        </div>
      </div>
    </div>
  );
}
