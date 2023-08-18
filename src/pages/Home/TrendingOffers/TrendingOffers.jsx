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
            className="relative overflow-hidden flex flex-col justify-between text-white rounded-lg shadow-md h-max"
          >
            <img
              className="w-full transition-transform ease-in duration-500 transform hover:scale-110"
              src={offer.image}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col justify-center p-6 text-neutral-50">
              <p className="drop-shadow-md font-extrabold text-sm md:text-lg mb-2 lg:mb-6">
                {offer.preTitle}
              </p>
              <div className="w-1/2">
                <p className="drop-shadow-md break-words font-extrabold text-lg md:text-2xl lg:text-4xl mb-1 lg:mb-2">
                  {offer.title}
                </p>
              </div>
              <p className="drop-shadow-md font-medium text-xs md:text-base lg:text-base">
                {offer.offer}
              </p>
              <button className="w-max font-extrabold bg-[#8A33FD] transition-all ease-in duration-100 p-2 md:p-3 hover:p-4 rounded-lg shadow-lg mt-auto">
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
