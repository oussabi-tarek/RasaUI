import "./App.css";
import Basic from "./components/Basic";
import Voice from "./components/Voice";
import Voice1 from "./components/Voice1";
import Voice2 from "./components/Voice2";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <h5>
        <img></img>
      </h5>
      <Voice />
      <Voice1 />
      <Voice2 />
      <Video />
      <Basic />

      {/* <Voice />
      <Voice1 />
      <Voice2 />
      <Basic /> */}
    </div>
  );
}

export default App;
