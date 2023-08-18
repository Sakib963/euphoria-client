import LeftBorder from "../../../assets/icons/LeftBorder";

const Heading = ({ title }) => {
  return (
    <h2 className="text-xl lg:text-3xl font-bold text-black flex items-center gap-4">
      <LeftBorder /> {title}
    </h2>
  );
};

export default Heading;
