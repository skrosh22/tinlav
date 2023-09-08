import { IphonePro } from ".";

export default {
  title: "Components/IphonePro",
  component: IphonePro,
  argTypes: {
    color: {
      options: ["graphite", "gold", "silver", "sierra-blue"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "graphite",
    className: {},
    overlapGroupClassName: {},
    screenClassName: {},
    screen: "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/screen.png",
    goldClassName: {},
    gold: "https://generation-sessions.s3.amazonaws.com/b2e825aa10c2720f5038517e1643f9bb/img/gold.png",
  },
};
