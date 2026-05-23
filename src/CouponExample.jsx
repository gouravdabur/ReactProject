import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { applyCoupon } from "./cartSlice";

function CouponExample() {

  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Apply Coupon Code
      </h2>

      {/* TEXTBOX */}

      <input
        type="text" placeholder="Enter coupon" value={coupon}
        onChange={(e) => setCoupon(e.target.value)
        }

        style={{
          padding: "10px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid gray",
          marginRight: "10px"
        }}
      />

      {/* APPLY BUTTON */}

      <button

        onClick={() =>
          dispatch(applyCoupon(coupon))
        }

        style={{
          padding: "10px 15px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >

        Apply Coupon

      </button>

    </div>

  );

}

export default CouponExample;