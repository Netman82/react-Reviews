import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      checkIndex();
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      checkIndex();
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const randPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * people.length);
      if (newIndex === index) {
        setIndex(checkIndex(newIndex));
      }
      return checkIndex(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randPerson}>
        Surprise Me
      </button>
    </article>

    // <div>
    //   {people.map((person) => {
    //     return <h3>{id + " " + name}</h3>;
    //   })}
    // </div>
  );
};
export default Review;
