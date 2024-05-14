import "./App.css";
import "./Components/Icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./Components/Icons";
import Demo from "./Components/Demo";
import ProfileInfo from "./Components/ProfileInfo";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <ProfileInfo />
      <Demo />
      <Icons />
    </>
  );
}

export default App;
