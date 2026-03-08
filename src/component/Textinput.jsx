import Cfomy from "../style/Coform.module.css";

export default function Textinput({
  className,
  label,
  type,
  placeholder,
  name,
}) {
  return (
    <div className={className}>
      <div className={Cfomy.name}>
        <label for="fname" className={Cfomy.na_label}>
          {label}
        </label>
        <br />
        <input
          name={name}
          type={type}
          className={Cfomy.inputcss}
          id="email"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
