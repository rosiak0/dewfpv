import ReactPlayer from "react-player";

const ShowReel = () => {
  return (
    <div className="w-full xl:w-3/5 m-auto">
      <h2 className="text-center text-xl mb-5">
        Showreel {new Date().getFullYear()}
      </h2>
      <ReactPlayer
        className="aspect-video"
        url="https://www.youtube.com/watch?v=cGlVJmCF_rU"
        width="full"
        height="auto"
      />
    </div>
  );
};

export default ShowReel;
