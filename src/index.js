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
