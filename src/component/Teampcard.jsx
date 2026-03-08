import Tempy from "../style/Team.module.css";

export default function Teampcard({ card }) {
  const { name, description, imgg, id } = card;

  return (
    <div className={`${Tempy.port_item}`}>
      <div className={Tempy.pt_prt}>
        <img src={imgg} className="img-fluid" />
      </div>
      <div className={Tempy.pb_prt}>
        <h2>{name}</h2>
        <p>
          {description} {id}
        </p>
      </div>
    </div>
  );
}
