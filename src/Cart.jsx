// Cart.jsx

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/* ALERT + CONFETTI */
import Swal from "sweetalert2";
import confetti from "canvas-confetti";

/* TOAST */
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* QR CODE */
import { QRCode } from "react-qr-code";

/* EMAILJS */
import emailjs from "@emailjs/browser";

/* REDUX */
import { addOrder } from "./ordersSlice";

import {
  applyCupon,
  resetCoupon
} from "./cuponSlice";

import {
  clearCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} from "./cartSlice";

import "./Cart.css";

function Cart() {

  const dispatch = useDispatch();

  /* =========================
      STATES
  ========================= */

  const [discount, setDiscount] = useState(0);

  const [coupon, setCoupon] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [customerEmail, setCustomerEmail] = useState("");

  /* =========================
      CART DATA
  ========================= */

  const cartItems = useSelector(
    (state) => state.cart
  );

  const {
    discount: couponDiscount
  } = useSelector(
    (state) => state.cuponDetails
  );

  /* =========================
      TOTAL CALCULATIONS
  ========================= */

  const totalAmount = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const discountAmount =
    (totalAmount * discount) / 100;

  const afterDiscountAmount =
    totalAmount - discountAmount;

  const couponDiscountAmount =
    (afterDiscountAmount * couponDiscount) / 100;

  const finalAmountAfterCoupon =
    afterDiscountAmount -
    couponDiscountAmount;

  const taxAmount =
    (finalAmountAfterCoupon * 18) / 100;

  const shippingAmount = 50;

  const netAmount =
    finalAmountAfterCoupon +
    taxAmount +
    shippingAmount;

  /* =========================
      CONFETTI
  ========================= */

  const runConfetti = () => {

    const end = Date.now() + 3000;

    (function frame() {

      confetti({
        particleCount: 20,
        spread: 60,
        origin: {
          x: Math.random(),
          y: 1
        }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }

    })();
  };

  /* =========================
      PLACE ORDER
  ========================= */

  const placeOrder = () => {

    Swal.fire({

      icon: "success",

      title: "🎉 Order Placed!",

      html: `
        <h3>Order Successful</h3>

        <p>
          Payment Method:
          <b>${paymentMethod || "Not Selected"}</b>
        </p>

        <p style="color:green">
          Thank You ❤️
        </p>
      `,

      confirmButtonText: "OK"

    }).then(() => {

      runConfetti();

      toast.success(
        "Order placed successfully!"
      );

      dispatch(addOrder({
        id: Date.now(),
        items: cartItems,
        total: netAmount,
        email: customerEmail
      }));

      dispatch(clearCart());

      dispatch(resetCoupon());

      setCustomerEmail("");

      setCoupon("");

      setDiscount(0);

      setPaymentMethod("");

    });
  };

  /* =========================
      EMAIL CHECKOUT
  ========================= */

  const handleCheckout = () => {

    if (!customerEmail) {

      toast.error(
        "Please enter your email"
      );

      return;
    }

    if (cartItems.length === 0) {

      toast.error(
        "Cart is empty"
      );

      return;
    }

    /* =========================
        PURCHASE DETAILS
    ========================= */

    let purchaseDetails = {

      orderId:
        "ORD-" +
        Math.floor(
          Math.random() * 1000000000
        ),

      date:
        new Date().toLocaleString(),

      items: [...cartItems],

      totalPrice: netAmount
    };

    /* =========================
        EMAIL PARAMS
    ========================= */

    const templateParams = {

      order_id:
        purchaseDetails.orderId,

      email: customerEmail,

      orders: cartItems
        .map(
          (item) =>
            `${item.name} x ${item.quantity}`
        )
        .join(", "),

      shipping:
        shippingAmount.toFixed(2),

      tax:
        taxAmount.toFixed(2),

      total:
        netAmount.toFixed(2),
    };

    /* =========================
        SEND EMAIL
    ========================= */

    emailjs

      .send(
        "service_j16vosq",
        "template_xdo9itb",
        templateParams,
        "Ee7cKIg5d1ygWsN4-"
      )

      .then((response) => {

        console.log(
          "SUCCESS!",
          response.status,
          response.text
        );

        Swal.fire({

          icon: "success",

          title: "✅ Order Placed",

          text:
            "Email sent & order saved successfully!"

        });

        toast.success(
          "Email sent successfully!"
        );

        /* SAVE ORDER */

        dispatch(
          addOrder(purchaseDetails)
        );

        /* CLEAR CART */

        dispatch(clearCart());

        dispatch(resetCoupon());

        /* CONFETTI */

        runConfetti();

        /* RESET STATES */

        setCustomerEmail("");

        setCoupon("");

        setDiscount(0);

        setPaymentMethod("");

      })

      .catch((error) => {

        console.log(
          "FAILED...",
          error
        );

        Swal.fire({

          icon: "error",

          title: "❌ Failed",

          text:
            "Email sending failed"

        });

        toast.error(
          "Email sending failed"
        );

      });
  };

  return (

    <div className="cart-container">

      <ToastContainer position="top-center" />

      <h1 className="cart-title">
        🛒 Cart Page
      </h1>

      {/* =========================
          CLEAR CART
      ========================= */}

      <button

        className="clear-btn"

        onClick={() => {

          dispatch(clearCart());

          dispatch(resetCoupon());

          toast.error("Cart cleared!");

        }}
      >
        Clear Cart
      </button>

      {/* =========================
          EMPTY CART
      ========================= */}

      {cartItems.length === 0 ? (

        <h3 className="empty-text">
          Your cart is empty
        </h3>

      ) : (

        <>

          {/* =========================
              CART ITEMS
          ========================= */}

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="cart-item"
            >

              <img
                src={item.img}
                alt={item.name}
                width="80"
              />

              <div className="item-details">

                <h3>{item.name}</h3>

                <p>
                  Price: ₹{item.price}
                </p>

                <p>
                  Qty: {item.quantity}
                </p>

                <p>
                  Total:
                  ₹
                  {item.price *
                    item.quantity}
                </p>

              </div>

              {/* QUANTITY */}

              <div className="quantity-box">

                <button

                  className="qty-btn"

                  onClick={() =>
                    dispatch(
                      decrementQuantity(item)
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button

                  className="qty-btn"

                  onClick={() =>
                    dispatch(
                      incrementQuantity(item)
                    )
                  }
                >
                  +
                </button>

              </div>

              {/* REMOVE */}

              <button

                className="remove-btn"

                onClick={() => {

                  dispatch(
                    removeFromCart(item)
                  );

                  toast.error(
                    `${item.name} removed`
                  );

                }}
              >
                Remove
              </button>

            </div>

          ))}

          {/* =========================
              DISCOUNT
          ========================= */}

          <div className="discount-section">

            <h2>
              Discount
            </h2>

            <button
              onClick={() =>
                setDiscount(10)
              }
            >
              10%
            </button>

            <button
              onClick={() =>
                setDiscount(20)
              }
            >
              20%
            </button>

            <button
              onClick={() =>
                setDiscount(30)
              }
            >
              30%
            </button>

          </div>

          {/* =========================
              COUPON
          ========================= */}

          <div className="coupon-section">

            <h2>
              Coupon
            </h2>

            <input
              value={coupon}

              onChange={(e) =>
                setCoupon(e.target.value)
              }

              placeholder="Enter coupon"
            />

            <button

              onClick={() => {

                dispatch(
                  applyCupon(coupon)
                );

                toast.success(
                  "Coupon Applied"
                );

              }}
            >
              Apply
            </button>

          </div>

          {/* =========================
              BILL SECTION
          ========================= */}

          <div className="total-section">

            <h2>
              Total:
              ₹
              {totalAmount.toFixed(2)}
            </h2>

            <h3>
              Discount:
              ₹
              {discountAmount.toFixed(2)}
            </h3>

            <h3>
              Coupon:
              ₹
              {couponDiscountAmount.toFixed(2)}
            </h3>

            <h3>
              GST (18%):
              ₹
              {taxAmount.toFixed(2)}
            </h3>

            <h3>
              Shipping:
              ₹
              {shippingAmount.toFixed(2)}
            </h3>

            <h2 className="final-amount">

              Net Amount:
              ₹
              {netAmount.toFixed(2)}

            </h2>

          </div>

          {/* =========================
              EMAIL SECTION
          ========================= */}

          <div className="email-section">

            <h3>
              📧 Enter Email
            </h3>

            <input

              type="email"

              value={customerEmail}

              onChange={(e) =>
                setCustomerEmail(
                  e.target.value
                )
              }

              placeholder="you@example.com"

            />

          </div>

          {/* =========================
              PAYMENT METHOD
          ========================= */}

          <div className="payment-method">

            <h3>
              💳 Select Payment Method
            </h3>

            <button
              onClick={() =>
                setPaymentMethod("qr")
              }
            >
              📱 QR Code
            </button>

            <button
              onClick={() =>
                setPaymentMethod("card")
              }
            >
              💳 Card
            </button>
          </div>
          {/* =========================
              QR CODE PAYMENT
          ========================= */}

          {paymentMethod === "qr" && (
            <div className="qr-section">

              <h4>Scan & Pay₹{netAmount.toFixed(2)}</h4>
              <QRCode
                size={250}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="H"
                value={`upi://pay?pa=8755014682@ybl&pn=FoodApp&tn=FoodOrder&am=${encodeURIComponent(netAmount.toFixed(2))}&cu=INR`}
              />
              <p>
                UPI ID:
                8755014682@ybl
              </p>
              <a href={`upi://pay?pa=8755014682@ybl&pn=FoodApp&tn=FoodOrder&am=${netAmount.toFixed(2)}&cu=INR`}
                className="upi-btn"
              >
                Open UPI App
              </a>
            </div>
          )}
          {/* =========================
              CHECKOUT BUTTON
          ========================= */}
          <button className="checkout-btn" onClick={handleCheckout}> ✅ Checkout & Send Email </button>
        </>
      )}
    </div>
  );
}
export default Cart;