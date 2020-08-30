import React from "react";
import { BackLink } from "../ui";
import { useParams } from "react-router-dom";

export const Cabin = () => {
  let { animal } = useParams();
  return (
    <section>
      <h1>Cabin Screen: {animal}</h1>
      <BackLink />
    </section>
  );
};
