import React from "react";
import "./dashboard.css";
import CardContainer from "../CardContainer/CardContainer";
import BottomCardContainer from "../BottomCardContainer/BottomCardContainer";

function DashBoard() {
  return (
    <div className="dashboard-container">
      <div className="title">
      <h2>Chose a plan that is right for you</h2>

      </div>
      <div className="peroid">
       <div>

          <div className="monthly">Monthly
          </div>
          <div className="annually">
            Annualy
          <div style={{color:'green',fontSize:'12px',marginBottom:"10px"}}>-10%</div>
            </div>
       </div>
        
      </div>
      <CardContainer/>
      <BottomCardContainer/>
    </div>
  );
}

export default DashBoard;
