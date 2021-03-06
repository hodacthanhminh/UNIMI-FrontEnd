import React, { useState } from "react";
import Svg4 from "../assets/Take Away-pana.svg";
import { Link } from "react-router-dom";
import { register } from "../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

const Register = ({ isAuthenticated, register } = {}) => {
  const initialData = Object.freeze({
    email: "",
    password: "",
    repassword: "",
    account_role: "customer",
  });
  const [data, setData] = useState(initialData);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.repassword) {
      register(data);
    } else {
      console.log("Wrong password");
    }
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
            <h1 className="login__heading">Đăng ký</h1>
            <div className="login__form">
              <input
                type="email"
                name="email"
                className="login__form-input mt-16"
                placeholder="Email / Tên đăng nhập "
                value={data.email}
                onChange={onChange}
              />
              <input
                type="password"
                className="login__form-input mt-16"
                placeholder="Mật khẩu "
                name="password"
                value={data.password}
                onChange={onChange}
              />
              <input
                type="password"
                className="login__form-input mt-16"
                placeholder="Nhập lại mật khẩu "
                name="repassword"
                value={data.repassword}
                onChange={onChange}
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
                <Link
                  to="/user/forgotpassword"
                  className="login__forgotpassword"
                >
                  {" "}
                  Quên mật khẩu?{" "}
                </Link>
              </div>
              <button className="btn btn-secondary mt-16" onClick={onSubmit}>
                {" "}
                Đăng ký{" "}
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
              <div className="login__policy mt-16">
                <p>
                  Bằng việc đăng kí, bạn đã đồng ý với Unimi về <br />
                  <Link to="/login" className="login__policy-text">
                    {" "}
                    Điều khoản dịch vụ
                  </Link>{" "}
                  {" & "}
                  <Link to="/login" className="login__policy-text">
                    {" "}
                    Chính sách bảo mật
                  </Link>
                </p>
              </div>
              <div className="login__register mt-16">
                <span>Bạn đã có tài khoản Unimi? </span>
                <Link to="/login" className="login__register-text">
                  {" "}
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
