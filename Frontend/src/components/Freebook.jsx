import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";

function Freebook() {
  const [filterData, setFilterData] = useState([]);

  // fetch JSON dynamically
  useEffect(() => {
    fetch("/list.json")
      .then((res) => res.json())
      .then((data) => {
        const freeBooks = data.filter((item) => item.category === "Free");
        setFilterData(freeBooks);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    accessibility: true,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-bold text-xl">Free offered Books</h1>
        <p>"Your learning journey begins here — for free."</p>
      </div>
      <div className="slider-container mt-4">
        {filterData.length === 0 ? (
          <p>Loading free books...</p>
        ) : (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Freebook;
