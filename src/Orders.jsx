// Orders.jsx

import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./Orders.css";

function Orders() {

  /* =========================
      GET ORDERS FROM STORE
  ========================= */

  const orders = useSelector(
    (globalState) =>
      globalState.orders || []
  );

  console.log(orders);

  return (

    <div className="orders-container">

      {/* =========================
          TITLE
      ========================= */}

      <h1 className="orders-title">
        📦 Your Order History
      </h1>

      {/* =========================
          EMPTY ORDERS
      ========================= */}

      {orders.length === 0 ? (

        <div className="empty-orders">

          <h2>
            No Orders Found 😔
          </h2>

          <Link
            to="/"
            className="back-btn"
          >
            ⬅ Back To Home
          </Link>

        </div>

      ) : (

        <>
          {/* =========================
              ORDER LIST
          ========================= */}

          <ol className="orders-list">

            {orders.map((order) => (

              <li
                key={order.orderId}
                className="order-card"
              >

                {/* ORDER ID */}

                <h2>
                  🆔 Order ID:
                  {order.orderId}
                </h2>

                {/* DATE */}

                <p className="order-date">

                  📅 Date:
                  {order.date}

                </p>

                {/* ITEMS */}

                <h3>
                  🛒 Ordered Items
                </h3>

                <ul className="items-list">

                  {order.items.map(
                    (
                      item,
                      itemIndex
                    ) => (

                      <li key={itemIndex}>

                        {item.name}
                        {" - "}
                        ₹{item.price}
                        {" x "}
                        {item.quantity}

                      </li>
                    )
                  )}

                </ul>

                {/* TOTAL */}

                <p className="total-amount">

                  💰 Total Amount:
                  ₹
                  {Number(
                    order.totalPrice
                  ).toFixed(2)}

                </p>

              </li>
            ))}

          </ol>

          {/* =========================
              BACK BUTTON
          ========================= */}

          <Link
            to="/"
            className="back-btn"
          >
            ⬅ Back To Home
          </Link>

        </>
      )}

    </div>
  );
}

export default Orders;