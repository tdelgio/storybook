// Button.stories.js | Button.stories.jsx

import React from "react";

import { ButtonPrimary, ButtonSecondary, ButtonRounded } from "./buttons";

export default {
  title: "Buttons",
};

export const Primary = () => <ButtonPrimary children="Primary" />;
export const Secondary = () => <ButtonSecondary children="Secondary" />;
export const Rounded = () => (
  <ButtonRounded children="Rounded" size="text-green-200" />
);
