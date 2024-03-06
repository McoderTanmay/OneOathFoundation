import "./App.css";
import InputForm from "./components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import rightbg from "./media/pexels-life-of-pix-7919.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Let's Connect</h1>
        <InputForm></InputForm>
      </div>
      <div className="right">
        <div className="wave">
          <svg
            width="783"
            height="1536"
            id="svgWave"
            viewBox="0 0 783 1536"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="wave"
              d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
              stroke="white"
            />
          </svg>
        </div>
        <div className="rightImg">
          <img src={rightbg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default App;
