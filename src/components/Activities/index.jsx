/** @format */

import React from "react";
import "./Activities.css";

function Activities() {
  return (
    <div className="container activitiesContainer">
      <div>
        <div className="row acivityItemHeader">
          <div className="col-md-1">
          </div>
          <div className="col-md-5"><strong>Title</strong></div>
          <div className="col-md-3"><strong>Date</strong></div>
          <div className="col-md-3"><strong>Place</strong></div>
        </div>
      </div>
      <div className="listLine"></div>
      <div>
        <div className="row acivityItem">
          <div className="col-md-1">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="col-md-5">Global million dollar workshop</div>
          <div className="col-md-3">14/14/2020</div>
          <div className="col-md-3">Mengo Ss</div>
        </div>
      </div>
      <div className="listLine"></div>
      <div>
        <div className="row acivityItem">
          <div className="col-md-1">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="col-md-5">Global million dollar workshop</div>
          <div className="col-md-3">14/14/2020</div>
          <div className="col-md-3">Nabisunsa Girls School</div>
        </div>
      </div>
      <div className="listLine"></div>
      <div>
        <div className="row acivityItem">
          <div className="col-md-1">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="col-md-5">Global million dollar workshop</div>
          <div className="col-md-3">14/14/2020</div>
          <div className="col-md-3">Elight Academy</div>
        </div>
      </div>
      <div className="listLine"></div>
      <div>
        <div className="row acivityItem">
          <div className="col-md-1">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="col-md-5">
            Trip To Rwanda And E Learning Conference Trip
          </div>
          <div className="col-md-3">25th To 29th </div>
          <div className="col-md-3">Elight Academy</div>
        </div>
      </div>
      <div className="listLine"></div>
      <div>
        <div className="row acivityItem">
          <div className="col-md-1">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <div className="col-md-5">Great Educators Dinner</div>
          <div className="col-md-3">30th November 2018</div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
