import porsty from "../style/Portfolio.module.css";
import Comonbtn from "./Comonbtn";
import { portflioData } from "./Data/Portfolidata";
import Portcard from "./Portcard";
export default function Portfolio() {
  return (
    <div className={porsty.portfolio}>
      <div className="container ban_container">
        <div className="row">
          <div className="col-lg-12">
            <div className={porsty.seebutn}>
              {/* <!-- comonbtn --> */}
              <Comonbtn
                child="See All"
                classNamee={`${porsty.clasfor} ${porsty.seebtn}`}
                icon="→"
              />
            </div>
          </div>
        </div>
        <div className="row">
          {portflioData.map((card, index) => {
            const pcardElement = (
              <div key={index} className="col-lg-6">
                <Portcard
                  link={card.link}
                  description={card.description}
                  bgColor={card.bgColor}
                  imgg={card.imgg}
                />
              </div>
            );
            return pcardElement;
          })}
        </div>
      </div>
    </div>
  );
}
