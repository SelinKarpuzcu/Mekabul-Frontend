import Header from "./Header";
import React from "react";
import { useLocation} from "react-router-dom";
import { NavLink} from "react-router-dom";

function Login() {
    let location = useLocation();
    const onSubmit = (evt) => {
      evt.preventDefault();
    };
     return (
        <>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <form
                className="form-horizontal"
                id="yorumEkle"
                onSubmit={(evt) => onSubmit(evt)}
              >
                <div className="form-group">
                  Login
                  <label className="col-sm-2 control-label">E-Posta:</label>
                  <div className="col-sm-10">
                    <textarea
                      className="review form-control"
                      name="text"
                      rows={1}
                    />
                  </div>
                  <label className="col-sm-2 control-label">Şifre:</label>
                  <div className="col-sm-10">
                    <textarea
                      className="review form-control"
                      name="text"
                      rows={1}
                    />
                  </div>
                </div>
                <NavLink
                    className="btn btn-default pull-right"
                    to={`/Register`}>
                    Kayıt Ol{" "}
                </NavLink>
                <button className="btn btn-default pull-right">Giriş Yap</button>
              </form>
            </div>
          </div>
        </>
      );
  }
  export default Login;