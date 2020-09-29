import React from "react";
// import "./InfoCore.css";
import { Link } from "react-router-dom";

const InfoCore = ({ infos, onButtonClick, displayBtn }) => {
  return (
    <div className="  card mb-6">
      <div style={{ background: "#0d1724" }} className="row no-gutters">
        <div className="col-md-4">
          <img
            style={{ height: "300px" }}
            src={infos.img}
            className="card-img"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              <Link to={"/details/" + infos.name}>{infos.name}</Link>{" "}
            </h5>
            <p>
              <small className="text-info">{infos.occupation}</small>
            </p>
            <p className="card-text text-light">
              Hello i am <b>{infos.name}</b> and i am {infos.age} years old. I
              am a {infos.occupation}. My salary is {infos.salary}$.
            </p>

            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            {displayBtn ? (
              <button
                onClick={() => onButtonClick(infos)}
                type="button"
                className="btn btn-info"
              >
                More info
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCore;
