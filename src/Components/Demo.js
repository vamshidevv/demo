import koli from "../Images/koli.jpeg";


const Demo = () => {
  return (
    <>
      <div className="container main-header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 box1">
            <img src={koli} alt="koli" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 box2">
            <img src={koli} alt="koli" />
          </div>
        </div>
      </div>
    </>
  );
};


export default Demo;
