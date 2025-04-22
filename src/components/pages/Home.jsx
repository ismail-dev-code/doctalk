import React from "react";
import Banner from "../Banner";
import Total from "../total/TotalSuccess";
import Doctors from "../doctors/Doctors";


const Home = () => {
 
  return (
    <div>
      <Banner />
      <Doctors />
      <Total/>
    </div>
  );
};

export default Home;
