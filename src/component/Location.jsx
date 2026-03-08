import Locaty from "../style/Location.module.css";

export default function Location() {
  return (
    <div className={Locaty.location}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className={`${Locaty.locat_map} ${Locaty.Amenities}`}>
              <div className={Locaty.locat_middle}>
                <div className={Locaty.if}>
                  <iframe
                    className={Locaty.iframe}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001631!2d-74.14448723354508!3d40.69763123329699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694091799438!5m2!1sen!2sbd"
                    height="532"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
