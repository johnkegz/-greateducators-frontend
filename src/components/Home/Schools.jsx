/** @format */

import React from "react";
import "./Home.css";

function rowOne() {
  return (
    <div className="row">
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-12 schools">
        <div className="column" style={{ width: "15%" }}>
          <img
            src="http://greateducatorsug.org/img/adverts/Mugwanya%20Preparatory%20School.jpg"
            alt="mbogo college school"
            style={{ width: "100%" }}
          />
        </div>
        <div className="column" style={{ width: "35%" }}>
          <img
            src="http://greateducatorsug.org/img/adverts/highschool.png"
            alt="mbogo high school"
            style={{ width: "100%" }}
          />
          <div className="bottom-left down-adverts">
            <b>Mbogo High School</b>
          </div>
        </div>
        <div className="column" style={{ width: "35%" }}>
          <img
            src="http://greateducatorsug.org/img/adverts/junior.jpg"
            alt="mbogo junior school"
            style={{ width: "100%" }}
          />
          <div className="bottom-left down-adverts">
            <b>Mbogo Junior School</b>
          </div>
        </div>
        <div className="column" style={{ width: "15%" }}>
          <img
            src="http://greateducatorsug.org/img/adverts/Mugwanya%20Preparatory%20School.jpg"
            alt="mbogo college school"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

function rowTwo(){
    return (
        <div className="row">
        <div class="col-md-12">
  <div class="column" style={{width: "35%"}}>
   <img src="http://greateducatorsug.org/img/adverts/mixed2.png" style={{width:"100%"}} alt="" />
  <div class="bottom-left down-adverts"><b>Mbogo mixed</b></div>
  </div>
    <div class="column" style={{width: "15%"}}>
    <img src="http://greateducatorsug.org/img/adverts/Ndejje%20SSS.jpg" alt="mbogo college school" style={{width:"100%"}} />
  </div>
  <div class="column" style={{width: "35%"}}>
    <img src="http://greateducatorsug.org/img/adverts/secvoc.png" alt="mbogo junior school" style={{width:"100%"}}/>
    <div class="bottom-left down-adverts"><b>Mbogo Sec and Voc Lugazi Campus</b></div>
  </div>
  <div class="column" style={{width: "15%"}}>
    <img src="http://greateducatorsug.org/img/adverts/Makerere%20College.jpg" alt="mbogo college school" style={{width:"100%"}} />
  </div>
  <div class="col-md-1"></div>
</div>
</div>
    )
}

function Schools() {
  return (
    <div>
      <div className="container">
          {rowOne()}
          {rowTwo()}
      </div>
    </div>
  );
}

export default Schools;
