import "./App.css";
import "./Components/Icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./Components/Icons";
import Demo from "./Components/Demo";
import ProfileInfo from "./Components/ProfileInfo";

function App() {
  return (
    <>
      <ProfileInfo />
      <Demo />
      <Icons />
    </>
  );
}

export default App;
