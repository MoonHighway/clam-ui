import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = `
    display: block;
    margin: 0 auto;
`;

export const Loading = () => (
  <div>
    <BounceLoader css={override} size={150} color={"#123abc"} />
  </div>
);
