import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ eIfnos }) => {
  const totalsaraly = eIfnos.reduce((total, info) => total + info.salary, 0);

  return (
    <div
      style={{ width: "300px", height: "300px", position: "sticky", top: "0" }}
      class="card text-white bg-info mb-3"
    >
      <h4 class="card-header text-center">Total Info</h4>
      <div class="card-body">
        <h5 class="card-title">Total Salary : {totalsaraly}</h5>
        <p class="card-text">
          Total Selected: {eIfnos.length}
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          magnam, incidunt dolorum repudiandae perspiciatis alias.
        </p>
      </div>
      <Link>
        {" "}
        <button className="btn bg-info">CheckOut</button>
      </Link>
    </div>
  );
};

export default Cart;
