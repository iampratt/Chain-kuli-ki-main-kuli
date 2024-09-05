import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Verifypage from "./verifypage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <div class="outer_container">
          <div class="inner_container">
            <Verifypage />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
