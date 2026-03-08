import submit_aro from "../assets/submit_aro.png";
import Cfomy from "../style/Coform.module.css";
import Textinput from "./Textinput";
export default function Cfrm_right() {
  return (
    <div className="col-xxl-8 col-xl-7 col-lg-7 col-md-6">
      {/* <!-- formstyle --> */}
      <div className={`row ${Cfomy.cf_padd}`}>
        <Textinput
          className={`col-lg-6 col-md-6 col-sm-6 ${Cfomy.sub_margbtm}`}
          label="First Name"
          type="name"
          name="user[name]"
          placeholder=""
        />
        <Textinput
          className={`col-lg-6 col-md-6 col-sm-6 ${Cfomy.sub_margbtm}`}
          label="Last Name"
          type="name"
          name="user[name]"
          placeholder=""
        />
        <Textinput
          className={`col-lg-6 col-md-6 col-sm-6 ${Cfomy.sub_margbtm}`}
          label="Email"
          type="email"
          name="user[email]"
          placeholder=""
        />
        <Textinput
          className={`col-lg-6 col-md-6 col-sm-6 ${Cfomy.sub_margbtm}`}
          label="Phone Number"
          type="number"
          name="user[number]"
          placeholder=""
        />
        <Textinput
          className={`col-lg-12 col-md-12  ${Cfomy.sub_margbtm}`}
          label="Message"
          type="message"
          name="user[message]"
          placeholder="Write your message.."
        />

        <div className={`col-lg-12 ${Cfomy.sub_for}`}>
          <div className={`${Cfomy.diff_btn} ${Cfomy.diff_allbtns}`}>
            <button className={Cfomy.comonbtn}>Send Message</button>
          </div>
          <div className={Cfomy.sub_aro}>
            <img src={submit_aro} className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
