/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IphonePro = ({
  color,
  className,
  overlapGroupClassName,
  screenClassName,
  screen = "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen.png",
  goldClassName,
  gold = "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/gold.png",
}) => {
  return (
    <div className={`iphone-pro ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        {["gold", "sierra-blue", "silver"].includes(color) && (
          <>
            <img
              className={`img ${screenClassName}`}
              alt="Screen"
              src={
                color === "sierra-blue"
                  ? "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen-4.png"
                  : color === "silver"
                  ? "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen-3.png"
                  : screen
              }
            />
            <img
              className={`img-2 ${goldClassName}`}
              alt="Gold"
              src={
                color === "sierra-blue"
                  ? "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/sierra-blue.png"
                  : color === "silver"
                  ? "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/silver.png"
                  : gold
              }
            />
          </>
        )}

        {color === "graphite" && (
          <>
            <img
              className="img"
              alt="Screen"
              src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen-5.png"
            />
            <img
              className="img-2"
              alt="Graphite"
              src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/graphite-1.png"
            />
            <div className="statusbar-iphone">
              <img
                className="right-side"
                alt="Right side"
                src="https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/right-side@2x.png"
              />
              <div className="left-side">
                <div className="statusbar-time">
                  <div className="text-wrapper">9:41</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

IphonePro.propTypes = {
  color: PropTypes.oneOf(["graphite", "gold", "silver", "sierra-blue"]),
  screen: PropTypes.string,
  gold: PropTypes.string,
};
