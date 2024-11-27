const HomeVideo = ({ placeholder, type, icon: Icon, design }) => {
  return (
    <div className="flex justify-center mt-4">
      <iframe
        className="border-2 rounded-lg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-rqnSoa_42w?si=8arbW5Rr6ja0tIRL"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HomeVideo;
