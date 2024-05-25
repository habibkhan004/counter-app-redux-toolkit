import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Contianer from "./components/Container";
import Controls from "./components/Controls";
import PrivayMessage from "./components/PrivacyMessage";
import { useSelector } from "react-redux";
function App() {
  let privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Contianer>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivayMessage /> : <DisplayCounter />}
          </div>
          <Controls></Controls>
        </Contianer>
      </div>
    </>
  );
}

export default App;
