import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import asset1 from "./asset1.svg"
const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src={asset1}/>
   
  );
};

export default Icon;
