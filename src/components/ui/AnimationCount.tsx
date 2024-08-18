"use client";
import React from "react";
import CountUp from "react-countup";

const AnimationCount = ({ amount }: { amount: number }) => {
  return (
    <CountUp
      end={amount}
      prefix="INR"
      start={75.039}
      duration={12}
      separator="-"
    />
  );
};

export default AnimationCount;
