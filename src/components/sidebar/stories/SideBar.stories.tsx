import { SideBar } from "../SiderBar";

export default {
  title: "sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export const sidebar = (args: any) => <SideBar {...args} />;

sidebar.args = {
  setDrawer: true,
};
