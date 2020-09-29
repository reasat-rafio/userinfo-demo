import React from "react";
import { useState } from "react";

const SelectedDetails = ({ e }) => {
  const color = [
    "bg-info",
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
  ];

  const randomColor = Math.floor(Math.random() * color.length);

  return (
    <div>
      <div className={`card text-white mb-3 ${color[randomColor]}`}>
        <div className="card-header ">{e.name}</div>
        <div className="card-body">
          <h5 className="card-title">{e.occupation}</h5>
          <p className="card-text">
            Hello i am <b>{e.name}</b> and i am {e.age} years old. I am a{" "}
            {e.occupation}. My salary is {e.salary}
            $.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectedDetails;
