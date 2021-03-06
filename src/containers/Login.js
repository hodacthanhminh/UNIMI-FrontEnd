import React, { useState } from "react";
import Svg4 from "../assets/Take Away-pana.svg";
import { Link } from "react-router-dom";
import { login } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Login = ({ login, isAuthenticated }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(data);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div className="login">
      <div className="container">
        <div className="login__main">
          <div className="login__left-side">
            <img src={Svg4} alt="" className="login__image" />
          </div>
          <div className="login__right-side">
            <h1 className="login__heading">Đăng nhập</h1>
            <div className="login__form">
              <input
                type="email"
                name="email"
                className="login__form-input"
                placeholder="Email / Tên đăng nhập "
                value={data.email}
                onChange={onChange}
                required
              />
              <input
                type="password"
                className="login__form-input mt-16"
                placeholder="Mật khẩu"
                name="password"
                value={data.password}
                onChange={onChange}
                required
              />
              <div className="login__form-help mt-8">
                <div className="login__checkbox">
                  <input type="checkbox" id="remember-checkbox" />
                  <label
                    htmlFor="remember-checkbox"
                    className="login__checkbox-label ml-4"
                  ></label>
                  Nhớ tôi
                </div>
                <Link to="/register" className="login__forgotpassword">
                  {" "}
                  Quên mật khẩu?{" "}
                </Link>
              </div>
              <button className="btn btn-secondary mt-16" onClick={onSubmit}>
                {" "}
                Đăng nhập{" "}
              </button>
              <div className="login__divider mt-16">
                <div className="login__divider-line"></div>
                <span className="login__divider-text">Hoặc</span>
                <div className="login__divider-line"></div>
              </div>
              <div className="login__another mt-16">
                <a href="#" className="btn btn-facebook">
                  Facebook
                </a>
                <a href="#" className="btn btn-google">
                  Google
                </a>
              </div>
              <div className="login__register mt-16">
                <span>Bạn mới đến Unimi? </span>
                <Link to="/register" className="login__register-text">
                  {" "}
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
