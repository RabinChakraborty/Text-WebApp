import "./App.css";
// eslint-disable-next-line no-unused-vars
import Navbar from "./components/navbar";
import Form from "./components/form";
function App() {
  return (
    <>
      <Navbar title="By Rabin Chakraborty" />
      <div className="container">
        <Form heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
