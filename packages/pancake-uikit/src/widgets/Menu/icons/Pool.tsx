import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import top100 from './top100.svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img style={{marginRight:'5px', maxWidth: '27px'}} src={top100} />
  );
};

export default Icon;
