import React from "react";
import { Link } from "react-router-dom";

const Unimi = ({ content }) => {
  return (
    <section className="Unimi">
      <div className="container">
        <div className={"unimi__main " + content.position}>
          <div className="unimi__content">
            <h1 className="heading unimi__heading">{content.heading}</h1>
            <p className="unimi__paragraph">{content.paragraph}</p>
            <Link to={content.link} className="btn btn-secondary">
              {content.button}
            </Link>
          </div>
          <div className="unimi__image">
            <img src={content.img} alt="None" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unimi;
