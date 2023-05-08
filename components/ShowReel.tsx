import ReactPlayer from "react-player";

const ShowReel = () => {
  return (
    <div className="">
      <h2 className="text-center text-xl mb-5">Showreel</h2>

      <ReactPlayer
        url="https://www.youtube.com/watch?v=cGlVJmCF_rU"
        width="100%"
      />
    </div>
  );
};

export default ShowReel;
