import Qulity from "../style/Quility.module.css";
import { QuailityData } from "./Data/Qualitydata";
import Qulicard from "./Qulicard";
export default function Quality() {
  return (
    <div className={Qulity.quality}>
      <div className={`container ban_container ${Qulity.qulty_contnr}`}>
        <div className="row">
          {QuailityData.map((card, index) => {
            // Render the card
            const cardElement = (
              <div
                key={index}
                className={`col-lg-4 col-md-6 col-sm-6 ${Qulity.mrbtom}`}
              >
                <Qulicard
                  title={card.title}
                  titleto={card.titleto}
                  description={card.description}
                  features={card.features}
                  bgColor={card.bgColor}
                  icon={card.icon}
                />
                {/* Render hr elements dynamically based on hrCount */}
              </div>
            );
            if (index === 2) {
              return (
                <>
                  {cardElement}
                  <div className={Qulity.magr}></div>
                </>
              );
            }
            return cardElement;
          })}
        </div>
      </div>
    </div>
  );
}
