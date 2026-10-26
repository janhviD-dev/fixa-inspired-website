import img from "../assets/Alogo4.jpg";
function BackgroundImage() {
  return (
    <>
      <img
        src={img}
        alt="img"
        className=" rounded-4xl w-full h-full object-cover"
      />
    </>
  );
}
export default BackgroundImage;
