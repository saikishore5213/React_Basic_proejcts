import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  const prevNumber = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const nextNumber = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevNumber}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextNumber}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
