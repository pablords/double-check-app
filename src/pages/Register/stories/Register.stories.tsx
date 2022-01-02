import React from "react";
import { Register } from "../components/presentation/Register";
import { action } from "@storybook/addon-actions";

export default {
  title: "register",
  parameters: {
    layout: "fullscreen",
  },
};

export const register = (args: any) => <Register {...args} />;

register.args = {
  saveUser: action("handleSignup"),
  loading: false,
  error: false,
  open: false
};
