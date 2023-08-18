import Heading from "../../Shared/Heading/Heading";

const galleryMainImage = "https://i.ibb.co/7jBk7sG/gallery1.png";

const galleryImages = [
  {
    id: 1,
    image: "https://i.ibb.co/YLJ0fyc/gallery2.png",
  },
  {
    id: 2,
    image: "https://i.ibb.co/VN0QpdP/gallery3.png",
  },
  {
    id: 3,
    image: "https://i.ibb.co/WyLp0GB/gallery4.png",
  },
  {
    id: 4,
    image: "https://i.ibb.co/jZmLByH/gallery5.png",
  },
];

const Gallery = ({ headImage }) => {
  return (
    <div className="py-10 px-4 lg:px-10">
      <Heading title={"Gallery"} />
      <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            className="h-full w-full transition-transform ease-in duration-500 transform hover:scale-125"
            src={headImage || galleryMainImage}
            alt="mainImage"
          />
        </div>
        <div className="flex flex-col gap-4">
          {galleryImages.map(
            (image, index) =>
              index < 2 && (
                <div key={image.id} className="w-full h-full aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-lg">
                  <img src={image.image} className="w-full h-full transition-transform ease-in duration-500 transform hover:scale-125" alt={`Gallery Image ${image.id}`} />
                </div>
              )
          )}
        </div>
        <div className="flex flex-col gap-4">
          {galleryImages.map(
            (image, index) =>
              index > 1 && (
                <div key={image.id} className="w-full h-full aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-lg">
                  <img src={image.image} className="w-full h-full transition-transform ease-in duration-500 transform hover:scale-125" alt={`Gallery Image ${image.id}`} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
