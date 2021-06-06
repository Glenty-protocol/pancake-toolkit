import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import farm from './glenty.png'
const Icon: React.FC<SvgProps> = (props) => {
  return (
   <img src={farm} />
  );
};

export default Icon;
