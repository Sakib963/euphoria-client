import React from "react";
import Heading from "../../Shared/Heading/Heading";

const trendingOffers = [
  {
    id: 1,
    image: "https://i.ibb.co/7vfmdw6/card1.png",
    preTitle: "Low Price",
    title: "High Coziness",
    offer: "Upto 50% Off",
  },
  {
    id: 2,
    image: "https://i.ibb.co/5KnkRVj/card2.png",
    preTitle: "100% Cotton",
    title: "Breezy Summer Style",
    offer: "Upto 70% Off",
  },
];

const TrendingOffers = () => {
  return (
    <div className="py-10 px-4 lg:px-10">
      <Heading title={"Trending Offers"} />
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center">
        {trendingOffers.map((offer) => (
          <div
            key={offer.id}
            className="relative flex flex-col justify-between text-white rounded-lg shadow-md"
          >
            <img className="w-full" src={offer.image} alt="" />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-neutral-50">
              <p className="drop-shadow-md font-extrabold text-sm lg:text-lg mb-6">
                {offer.preTitle}
              </p>
              <div className="w-1/2">
                <p className="drop-shadow-md break-words font-extrabold text-2xl lg:text-4xl mb-2">
                  {offer.title}
                </p>
              </div>
              <p className="drop-shadow-md font-medium text-xs lg:text-base mb-10">
                {offer.offer}
              </p>
              <button className="w-max mt-2 bg-[#8A33FD] p-3 rounded-lg shadow-lg">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOffers;
