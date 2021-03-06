import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";
import UserMenu from "./user/UserMenu";

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const Login = () => {
  return (
    <Fragment>
      <Link to="/login" className="btn btn-primary">
        Đăng nhập
      </Link>
    </Fragment>
  );
};

const Header = ({ isAuthenticated }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__main">
          <Link className="header__logo" to="/">
            Unimi
          </Link>
          <div className="header__menu">
            <NavLink
              className="menu__link"
              activeClassName="active"
              to="/"
              exact={true}
            >
              {" "}
              Trang chủ
            </NavLink>
            <NavLink className="menu__link" to="/about">
              {" "}
              About
            </NavLink>
            <NavLink className="menu__link" to="/store">
              {" "}
              Cửa hàng
            </NavLink>
            <NavLink className="menu__link" to="/register">
              {" "}
              Thành viên
            </NavLink>
            <div className="menu__auth">
              {isAuthenticated === true ? <UserMenu /> : <Login />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Header);
