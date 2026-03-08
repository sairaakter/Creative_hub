import Qulity from "../style/Quility.module.css";

import Comonbtn from "./Comonbtn";
export default function Qulicard({
  title,
  titleto,
  description,
  features,
  bgColor,
  icon,
}) {
  return (
    <div
      className={`${Qulity.quality_item} h-100`}
      style={{ backgroundColor: bgColor }}
    >
      <img src={icon} className="img-fluid" />
      <h3>
        {title} <br />
        {titleto}
      </h3>
      <div className={Qulity.linetwo}></div>
      <p>{description}</p>
      <div className={Qulity.quality_lis}>
        {features?.map((feature, index) => (
          <h4 key={index}>✔ {feature}</h4>
        ))}
      </div>
      {/* <!-- comonbtn --> */}
      <Comonbtn child="Read More" classNamee={Qulity.clasthre} icon="→" />
    </div>
  );
}
