import { Link, NavLink, useLocation } from "react-router-dom";

import hub from "../assets/hub.png";
import togle from "../assets/togle.png";
import navy from "../style/Nav.module.css";
import Comonbtn from "./Comonbtn";
export default function Nav() {
  const location = useLocation();
  // check current path
  //   const isHomePage = location.pathname === "/";
  const isAbout = location.pathname === "/About";
  const isContact = location.pathname === "/Contact";
  return (
    <>
      <div
        className={`${navy.header} ${isAbout ? navy.about_header : isContact ? navy.cont_header : ""}`}
      >
        <div className="container cus_container">
          <div className="">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                {/* <!-- logo --> */}
                <Link className="navbar-brand" to="/">
                  <img className={navy.logo} src={hub} alt="hub" />
                </Link>
                {/* <!-- toggle btn --> */}
                <button
                  className={`navbar-toggler ${navy.nav_togle}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#nav_cus"
                  aria-controls="nav_cus"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    src={togle}
                    alt="Toggle navigation"
                    className={`img-fluid ${navy.custom_toggler_icon}`}
                  />
                </button>
                {/* <!-- nav item --> */}
                <div
                  className={`collapse navbar-collapse nav_colpss ${navy.navb}`}
                  id="nav_cus"
                >
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className={`nav-item ${navy.custom_btn}`}>
                      <NavLink className="nav-link" aria-current="page" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className={`nav-item ${navy.custom_btn}`}>
                      <NavLink className="nav-link" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className={`nav-item ${navy.custom_btn}`}>
                      <NavLink className="nav-link" to="/ClientProjects">
                        Client Projects
                      </NavLink>
                    </li>
                    <li className={`nav-item ${navy.custom_btn}`}>
                      <NavLink className="nav-link" to="/OurTeam">
                        Our Team
                      </NavLink>
                    </li>
                    <li className={`nav-item ${navy.custom_btn}`}>
                      <NavLink className="nav-link" to="/Contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  {/* <!-- contact btn --> */}
                  {/* <!-- comonbtn --> */}
                  {/* <a href="#" className={navy.btn_arrow}>
                    Get A Quote
                    <span className={navy.arrow}>→</span>
                  </a> */}
                  <Comonbtn child="Get A Quote" icon="→" />
                </div>
              </div>
            </nav>
            {/* <!-- abot_banner --> */}
            {isAbout && (
              <div className={navy.Abut_banner}>
                <h1>About Us</h1>
                <div className={navy.Pg_links}>
                  <a href="home.html">Home</a> {">"}
                  <a href="./about.html">About Us</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
