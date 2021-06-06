import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import asset1 from "./logo.svg"
const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={asset1}/>
   
  );
};

export default Icon;
