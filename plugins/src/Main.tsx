import React from "react";
import { substract, multiple } from "./math";

export function Main() {
  console.log("뺄셈 : ", substract(30, 20));
  console.log("곱셈 : ", multiple(2, 10));

  return (
    <>
      <div>Plugins Sample</div>
      <p>It should have Blue Color</p>
    </>
  );
}
