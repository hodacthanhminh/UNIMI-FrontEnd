import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import Ava from "../../assets/WOWMINH.png";

const UserAddress = ({ isAuthenticated, user }) => {
  // if (!isAuthenticated) return <Redirect to="/login" />;

  //if (user === null) return <> </>;
  return (
    <div className="user-profile">
      <div className="container">
        <div className="user-profile__main">
          <div className="user-profile__navigation">
            <div className="navigation__header">
              <div className="image">
                <img src={Ava} alt="avatar" />
              </div>
              <div className="name">Ho Dac Thanh Minh</div>
            </div>
            <div className="navigation__list">
              <div className="navigation__item">
                <NavLink
                  to="/user/profile"
                  activeClassName="active"
                  extract={true}
                >
                  <div className="navigation__item-icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <span> Cập nhật tài khoản </span>
                  <div className="navigation__item-icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </NavLink>
              </div>
              <div className="navigation__item">
                <NavLink
                  to="/user/address"
                  activeClassName="active"
                  extract={true}
                >
                  <div className="navigation__item-icon">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                  <span> Thông tin đơn hàng </span>
                  <div className="navigation__item-icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </NavLink>
              </div>
              <div className="navigation__item">
                <NavLink
                  to="/user/payment"
                  activeClassName="active"
                  extract={true}
                >
                  <div className="navigation__item-icon">
                    <i class="far fa-credit-card"></i>
                  </div>
                  <span> Phuong thức thanh thoán </span>
                  <div className="navigation__item-icon">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="user-profile__detail"></div>
        </div>
      </div>
    </div>
  );
};

UserAddress.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(UserAddress);
