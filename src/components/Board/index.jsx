/** @format */

import React from "react";
import FittedImage from "react-fitted-image";
import "./Board.css";

function Board() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/iziz.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Izizinga Rose</strong>
              </div>
              <div className="boardNameOverlayContent">
                Chair person Read more
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/showcase/charles1.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Dr Charles Kahigiriza</strong>
              </div>
              <div className="boardNameOverlayContent">
                Vice Chair person Read more
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/lutaya.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Rev Bro Godfrey Lutaaya</strong>
              </div>
              <div className="boardNameOverlayContent">Treasurer</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/showcase/viola.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Viola Nalowooza</strong>
              </div>
              <div className="boardNameOverlayContent"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/martin2.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Muyingo Martin</strong>
              </div>
              <div className="boardNameOverlayContent"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="board">
            <FittedImage
              fit="cover"
              loader={<div>Loading</div>}
              onLoad={(...args) => console.log(...args)}
              onError={(...args) => console.log(...args)}
              src="http://greateducatorsug.org/img/bumba.jpg"
            />
            <div className="boardNameOverlay">
              <div className="boardNameOverlayTitle">
                <strong>Bbumba Solomon</strong>
              </div>
              <div className="boardNameOverlayContent">
                Co-ordinator Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
