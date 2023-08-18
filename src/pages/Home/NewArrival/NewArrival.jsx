import Heading from "../../Shared/Heading/Heading";
import "./NewArrival.css";

const NewArrival = () => {
  const newArrivals = [
    {
      id: 1,
      imageUrl: "https://i.ibb.co/mbBhXfK/shirts.png",
      categoryName: "Urban Shirts",
    },
    {
      id: 5,
      imageUrl: "https://i.ibb.co/tKhzpfp/coats.png",
      categoryName: "Coats & Parkas",
    },
    {
      id: 6,
      imageUrl: "https://i.ibb.co/p1vgkNC/hoodies.png",
      categoryName: "Hoodies & Sweatshirt",
    },
    {
      id: 2,
      imageUrl: "https://i.ibb.co/jySNkFf/t-shirts.png",
      categoryName: "Active T-Shirts",
    },
    {
      id: 3,
      imageUrl: "https://i.ibb.co/vxpqJPD/full-sleeve.png",
      categoryName: "Full Sleeve",
    },
    {
      id: 4,
      imageUrl: "https://i.ibb.co/X36HGHd/joggers.png",
      categoryName: "Knitted Joggers",
    },
    /* ,
    {
      id: 7,
      imageUrl: "https://i.ibb.co/X36HGHd/joggers.png",
      categoryName: "Urban Shirts",
    },
    {
      id: 8,
      imageUrl: "https://i.ibb.co/X36HGHd/joggers.png",
      categoryName: "Urban Shirts",
    }, */
  ];

  return (
    <div className="px-4 lg:px-10">
      <Heading title={"New Arrival"}/>
      <div className="grid grid-flow-col gap-6 lg:gap-10 overflow-x-auto py-10 new-arrivals-overflow">
        {newArrivals.map((category) => (
          <div key={category.id} className="w-[260px] space-y-3">
            <img
              src={category.imageUrl}
              alt="New Arrival Items"
              className="w-full"
            />
            <p className="text-lg font-bold">{category.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
