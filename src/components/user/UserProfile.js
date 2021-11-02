import Ava from "../../assets/WOWMINH.png";
import React from "react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
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
          <div className="user-profile__detail">
            <div className="detail__heading">
              <span> Thông tin người dùng</span>
            </div>
            <div className="detail__table">
              <div className="detail__row">
                <div className="detail__row-title">
                  <span> Tải ảnh đại diện</span>
                </div>
              </div>
              <div className="detail__row"></div>
              <div className="detail__row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
