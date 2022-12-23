import React, { useState } from "react";

type Props={
  size:String,
  variant:String,
  children:React.ReactNode
}

const Button=(props:Props)=> {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);
  return (
    <button className={`btn${variant} btn${size}`}>{props.children}</button>
  );
}
export default Button;