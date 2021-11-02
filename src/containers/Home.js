import React from "react";
import Unimi from "../components/Unimi";
import Svg7 from "../assets/Online Groceries-pana.svg";
import Svg8 from "../assets/Online Groceries-amico.svg";
import Svg9 from "../assets/Discount-pana.svg";

const Infos = [
  {
    position: "right",
    heading: "Unimi Food tới rồi đây!",
    caption: "",
    paragraph: "Còn chần chờ gì mà không đặt Unimi ngay?",
    link: "/login",
    button: "Cùng khám phá",
    img: Svg7,
  },
  {
    position: "left",
    heading: "Giảm giá khủng",
    caption: "",
    paragraph: "Nhiều ưu đãi mỗi ngày đang chờ đợi bạn tại Unimi đấy!",
    link: "/",
    button: "Đặt hàng ngay",
    img: Svg9,
  },
  {
    position: "right",
    heading: "Tha hồ lựa chọn",
    caption: "",
    paragraph: "Đa dạng món ngon trên khắp địa bàn thành phố! ",
    link: "/",
    button: "Đặt hàng ngay",
    img: Svg8,
  },
];
export default function Home() {
  return (
    <div className="home">
      {Infos.map((info, index) => (
        <Unimi content={info} key={index} />
      ))}
    </div>
  );
}
