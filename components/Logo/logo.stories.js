// Button.stories.js | Button.stories.jsx

import React from "react";

import { Logo, LogoMobile } from "./logo";

export default {
  title: "Logos",
};

export const Desktop = () => <Logo />;
export const Mobile = () => <LogoMobile />;
