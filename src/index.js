// import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   const [tempMovieRating, setTempMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="blue"
//         onSetRating={setMovieRating}
//         onSetTempRating={setTempMovieRating}
//       ></StarRating>
//       <p>This movie was rated {tempMovieRating || movieRating || "--"} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    ></StarRating>
    <StarRating
      size="30"
      color="red"
      className="test"
      defaultRating={3}
    ></StarRating>

    <Test></Test> */}
  </React.StrictMode>
);
