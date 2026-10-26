import img from "../assets/vid.mp4";
function BackgroundVideo() {
  return (
    <video
      src={img}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export default BackgroundVideo;
