import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Home.css";
import BudgetApp from "../BudgetApp";
function Home() {
  return (
    <div className="home">
      <>
        <NavTab index="0"></NavTab>
        <hr></hr>
      </>
      <div>
        <BudgetApp />
      </div>
    </div>
  );
}

export default Home;
