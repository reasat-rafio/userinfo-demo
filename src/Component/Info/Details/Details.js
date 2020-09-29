import React from "react";
import SelectedDetails from "./SelectedDetails/SelectedDetails";

const Details = ({ eIfnos, lastInfos }) => {
  return (
    <div className="details">
      <div
        class="card bg-dark text-white"
        style={{
          height: "340px",
          width: "100%",
          margin: "10px 0",
        }}
      >
        <img
          style={{ height: "100%" }}
          src={lastInfos.img}
          class="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <h3 className="card-title text-info">{lastInfos.name}</h3>
          <p className="card-text text-warning">
            Hello i am <b>{lastInfos.name}</b> and i am {lastInfos.age} years
            old. I am a {lastInfos.occupation}. My salary is {lastInfos.salary}
            $.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <div
        style={{
          overflow: "scroll",
          height: "700px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",

          position: "sticky",
          top: "0",
        }}
      >
        {eIfnos.map((e) => (
          <SelectedDetails e={e} />
        ))}
      </div>
    </div>
  );
};

export default Details;
