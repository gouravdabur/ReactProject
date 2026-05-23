// Milk.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Milk.css";

function Milk() {

  const dispatch = useDispatch();

  const milkItems = [

    {
      id: 1,
      name: "Amul Milk",
      price: 30,
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/812816L+HkL.jpg"
    },

    {
      id: 2,
      name: "Chocolate Milk",
      price: 50,
      rating: 4.8,
      img: "https://t3.ftcdn.net/jpg/00/99/35/86/360_F_99358669_MjYR7q7qO4yRn82mTXOHHv23iJgLYxpk.jpg"
    },

    {
      id: 3,
      name: "Cold Coffee",
      price: 80,
      rating: 4.7,
      img: "https://t4.ftcdn.net/jpg/02/59/05/51/360_F_259055153_LaoKWSKMLV044I5iEXkIyguCe24m8iEJ.jpg"
    },

    {
      id: 4,
      name: "Strawberry Milkshake",
      price: 90,
      rating: 4.6,
      img: "https://t4.ftcdn.net/jpg/04/41/92/49/360_F_441924986_SIEcd74V9qekkhlUVCJwbpkA6PebhZg1.jpg"
    },

    {
      id: 5,
      name: "Badam Milk",
      price: 70,
      rating: 4.4,
      img: "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/post_banners/7a6f82b8f824f5dae6cf7a515e0b498e189267778f63fe7742d1fca6da678df6.jpg"
    },

    {
      id: 6,
      name: "Vanilla Milkshake",
      price: 95,
      rating: 4.5,
      img: "https://www.shutterstock.com/image-photo/frozen-blended-vanilla-milkshake-ice-260nw-2428822319.jpg"
    },

    {
      id: 7,
      name: "Mango Shake",
      price: 85,
      rating: 4.9,
      img: "https://www.shutterstock.com/image-photo/fresh-tropical-fruit-smoothie-mango-260nw-1030798531.jpg"
    },

    {
      id: 8,
      name: "Banana Shake",
      price: 75,
      rating: 4.3,
      img: "https://t4.ftcdn.net/jpg/04/41/92/47/360_F_441924789_8ekJsMdTkXLg7e8ijcKnjh0hbD03b4k4.jpg"
    },

    {
      id: 9,
      name: "Lassi",
      price: 60,
      rating: 4.7,
      img: "https://c1.wallpaperflare.com/preview/153/781/237/food-cream-delicious-epicure-milk-lassi.jpg"
    },

    {
      id: 10,
      name: "Rose Milk",
      price: 65,
      rating: 4.4,
      img: "https://t4.ftcdn.net/jpg/06/77/48/57/360_F_677485726_HnSvEvPTh1S7M0uoPzSic8t4epXIjBrW.jpg"
    },

    {
      id: 11,
      name: "Protein Shake",
      price: 120,
      rating: 4.8,
      img: "https://t3.ftcdn.net/jpg/06/58/27/84/360_F_658278480_2UlImOrVHQ1oy165lNQ1y17r1yQBQxPV.jpg"
    },

    {
      id: 12,
      name: "Buttermilk",
      price: 40,
      rating: 4.2,
      img: "https://t3.ftcdn.net/jpg/18/42/40/10/360_F_1842401012_69AvPNJo9Jh5wgYtV5Ngf2UBDlnVjiaL.jpg"
    },

    {
      id: 13,
      name: "Oreo Shake",
      price: 110,
      rating: 4.9,
      img: "https://t3.ftcdn.net/jpg/05/32/01/40/360_F_532014030_SIKl4Vkabl5SL1MZaF14UP8nELZNmPBk.jpg"
    },

    {
      id: 14,
      name: "Kulfi Milkshake",
      price: 95,
      rating: 4.6,
      img: "https://img.freepik.com/free-photo/sweet-summer-milkshake-wood-table-background-generative-ai_188544-12118.jpg"
    },

    {
      id: 15,
      name: "Pista Milk",
      price: 85,
      rating: 4.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7Y3c9Ei_LhIw9fp3oJgiug6nfp84O5ZXFg&s"
    },

    {
      id: 16,
      name: "Coffee Milkshake",
      price: 100,
      rating: 4.8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2vk1BpfrxOc0AEHDZzQr14kD02snZuhwNQ&s"
    },

    {
      id: 17,
      name: "Fresh Cream Milk",
      price: 70,
      rating: 4.3,
      img: "https://t4.ftcdn.net/jpg/02/31/84/29/360_F_231842968_qThCnmslPbEAwhg7nuW9rAy8qRNhRli7.jpg"
    },

    {
      id: 18,
      name: "Milk Tea",
      price: 25,
      rating: 4.1,
      img: "https://t3.ftcdn.net/jpg/01/06/14/76/360_F_106147605_xmXfzxpraUtLQZkwTYWhjIJc0dkBkN8Y.jpg"
    },

    {
      id: 19,
      name: "Milk Coffee",
      price: 35,
      rating: 4.4,
      img: "https://t3.ftcdn.net/jpg/01/31/05/30/360_F_131053005_61aYiIU3MbSJU2lU5uSBbU6qdX87rXLn.jpg"
    },

    {
      id: 20,
      name: "Dry Fruit Shake",
      price: 130,
      rating: 4.9,
      img: "https://www.shutterstock.com/image-photo/dry-fruit-shake-on-white-600nw-2608732553.jpg"
    },
    // ADD THESE ITEMS INSIDE milkItems ARRAY

{
  id: 21,
  name: "Chocolate Protein Shake",
  price: 140,
  rating: 4.8,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2IkBGtsOTVL9Zo8qp3i8AEzVO0gHe8CfCXg&s"
},

{
  id: 22,
  name: "Caramel Milkshake",
  price: 115,
  rating: 4.6,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJufp3SKDRfZfJ4Im-r39n7aZ4xbWETstbA&s"
},

{
  id: 23,
  name: "Blueberry Shake",
  price: 125,
  rating: 4.7,
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8t3dOVVZnpsYryaFVQNHuXfMBvlQPaf8XQ&s"
},

{
  id: 24,
  name: "Vanilla Cold Coffee",
  price: 105,
  rating: 4.5,
  img: "https://thumbs.dreamstime.com/b/iced-vanilla-latte-clear-glass-drinks-concept-generated-image-creamy-coffee-espresso-milk-syrup-layered-ice-cubes-caramel-387500791.jpg"
}

  ];

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages =
    Math.ceil(milkItems.length / itemsPerPage);

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentItems = milkItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (

    <div className="milk-container">

      <h1>🥛 Milk </h1>

      <div className="milk-list">

        {currentItems.map((item) => (

          <div className="milk-card" key={item.id}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <p className="rating">
              ⭐⭐⭐⭐⭐ {item.rating}
            </p>

            <button
  onClick={() => {

    dispatch(addToCart(item));

    toast.success(
      `${item.name} added to cart successfully!`,
  {
        position: "top-right",
        autoClose: 2000,
      }
    );

  }}
>
  Add To Cart
</button>

          </div>

        ))}

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (

          <button
            key={i}
            className={
              currentPage === i + 1
                ? "active"
                : ""
            }
            onClick={() =>
              setCurrentPage(i + 1)
            }
          >
            {i + 1}
          </button>

        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>

  );
}

export default Milk;