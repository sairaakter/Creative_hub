import tesmony from "../style/Testimonial.module.css";

export default function Testcard({ card }) {
  // Ekhane card theke proyojoniyo data gulo ber kore neya holo
  const { name, description, position, from, imgg, id } = card;

  return (
    <div className={`${tesmony.tes_item} h-100`}>
      <h1>
        "{description}"{id}
      </h1>
      <div className={tesmony.china}>
        <div className={tesmony.ts_intro}>
          <img src={imgg} className="img-fluid" />
          <p>{from}</p>
        </div>
        <p>
          {name} <br />
          {position}
        </p>
      </div>
    </div>
  );
}
