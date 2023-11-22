import Logo from "@/components/UI/Logo/Logo";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Logo />
      <h1>This is h1</h1>
      <h2>This is h2</h2>
      <h3>This is h3</h3>
      <h4>This is h4</h4>
      <h5>This is h5</h5>
      <h6>This is h6</h6>
      <p className="font-josefin">This is paragraph</p>
      <span>This is span</span>
      <br />
      <button className="button">Button 1</button>
    </div>
  );
};

export default HomePage;
