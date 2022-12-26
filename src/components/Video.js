import MyVideo from "../assets/chat.mp4";
import MyImage from "../assets/chat1.jpg";

function Video() {
  const myvideo = {
    position: "fixed",
    left: "200px",
    top: "20px",
    width: "50%",
    height: "80%",
  };

  return (
    <div>
      {/* <video style={myvideo} src={MyVideo} autoPlay loop muted /> */}
      <img style={myvideo} src={MyImage} />
    </div>
  );
}

export default Video;
