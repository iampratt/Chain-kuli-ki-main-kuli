import { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Verifypage from "./verifypage";
import Profilepage from "./Profilepage";
import Detailspage from "./Detailspage";

function App() {
  const [page, setPage] = useState("verify");
  const handleProfileShift = () => {
    setPage("profile");
  };
  const handleDetailsShift = () => {
    setPage("details");
  };
  return (
    <>
      <div className="outer_container">
        <div className="inner_container">
          {page === "verify" && (
            <Verifypage
              onLoginClick={handleProfileShift}
              onVerifyClick={handleDetailsShift}
            />
          )}
          {page === "profile" && <Profilepage />}
          {page === "details" && <Detailspage />}
        </div>
      </div>
    </>
  );
}

export default App;
