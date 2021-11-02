import React, { useState, useEffect } from "react";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Ava from "../../assets/WOWMINH.png";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserMenu = ({ logout, user, isLoading }) => {
  const handeShow = (e) => {
    console.log(">>Change show");
    setShow(!show);
  };
  const [show, setShow] = useState(null);
  //   useEffect(() => {
  //     let dropdowntoogle = document.querySelector(".dropdown-menu");
  //     dropdowntoogle.classList.toggle("show");
  //   }, [show]);

  const handleLogout = (e) => {
    e.stopPropagation();
    e.preventDefault();
    logout();
  };

  if (isLoading) {
    return <> </>;
  }

  return (
    <div className="user__account">
      <div className="dropdown" onClick={handeShow}>
        <div className="dropdown-toggle" id="user__dropdown">
          <div className="image">
            <img src={Ava} alt="avatar" />
          </div>
          <span className="name">
            {user.last_name} {user.first_name}
          </span>
        </div>
        <div className={`dropdown-menu ${show ? "show" : ""}`}>
          <Link to="/user/history">
            <div className="dropdown-item">Lịch sử đơn hàng</div>
          </Link>
          <Link to="/user/profile">
            <div className="dropdown-item">Thông tin cá nhân</div>
          </Link>
          <div className="dropdown-item" onClick={handleLogout}>
            <span> Đăng xuất </span>
          </div>
        </div>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { logout })(UserMenu);
