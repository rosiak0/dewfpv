const ShowReel = () => {
  return (
    <div className="w-full sm:w-3/5 m-auto">
      <h2 className="text-center text-xl mb-5">
        Showreel
        {/* Showreel {new Date().getFullYear()} */}
      </h2>
      <iframe
        className="m-auto aspect-video w-full h-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cGlVJmCF_rU"
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default ShowReel;
