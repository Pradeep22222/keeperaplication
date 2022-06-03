import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Heading from "./Components/Header";
import reportWebVitals from "./reportWebVitals";
import NotePart from "./Components/Note";
import FooterFoot from "./Components/Footer";
import PersonalDetails, {
  PersonalDetailsHeading,
} from "./Components/Personaldetails";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Heading />
    <NotePart />
    <FooterFoot />
    <PersonalDetailsHeading />
    <PersonalDetails name="Pradeep" age="df" sex="male" class="blue" />
    <PersonalDetails name="Kumar" age="23" sex="female" class="red" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
