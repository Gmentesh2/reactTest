import "./App.css";
import img from "../src/assets/OIP.jpeg";
import Card from "./components/card";

function App() {
  const num = 10;
  console.log(num);

  const array = [1, 2, 3, 4, 5];

  return (
    <>
      <Card />
      <h1>--------------------</h1>
      <h1>React js</h1>
      <button>Hello</button>
      <h2>Hello h2</h2>
      <img src={img} alt="" />
      <p>Hello</p>
      <p>random num is: {Math.floor(Math.random() * 10)}</p>
      <h3>num is {num}</h3>

    </>
  );
}

export default App;
