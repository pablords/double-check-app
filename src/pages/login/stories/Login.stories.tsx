import React from "react";
import { action } from "@storybook/addon-actions";
import { Login } from "../components/presentation/Login";

export default {
  title: "login",
  parameters: {
    layout: "fullscreen",
  },
};

export const login = (args: any) => <Login {...args} />;

login.args = {
  validatedLogin: action("validatedLogin"),
  loading: false,
  error: false,
  open: false
};
