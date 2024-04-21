import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';



import App from "./App";
//import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




//-------------------------Navbar-------------------------//
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "Policy",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Reparation Center",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Insurance",
    link: "/journal",
  },
];
