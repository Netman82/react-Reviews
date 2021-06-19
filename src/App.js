import React from "react";
import Review from "./Review";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>Our reviews</h2>
            <div className="underline"></div>
            <Review />
          </div>
        </section>
      </main>
    </div>
  );
}
