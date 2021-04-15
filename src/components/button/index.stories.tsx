import { Meta, Story } from "@storybook/react";
import { IconInfoCircleFill } from "~/icons/info-circle-fill";
import { Button as Component } from ".";
import type { Props } from "./types";

export default {
  title: `components/${Component.name}`,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const _: Story<Props> = (args) => <Component {...args} />;

export const Default = _.bind({});
Default.args = {
  className: "btn-primary",
  children: "foo",
};

export const Sizings = _.bind({});
Sizings.args = {
  className: "btn-primary",
  children: "foo",
};
Sizings.argTypes = {
  className: {
    control: {
      type: "inline-radio",
      options: {
        small: "btn-primary btn-sm",
        normal: "btn-primary",
        large: "btn-primary btn-lg",
      },
    },
  },
};

export const Link = _.bind({});
Link.args = {
  className: "btn-link",
  children: "foo",
};

export const WithIcon = _.bind({});
WithIcon.args = {
  className: "btn-primary",
  children: (
    <>
      <IconInfoCircleFill className="w-4 h-4" />
      <span className="ps-2">foo</span>
    </>
  ),
};

export const Disabled = _.bind({});
Disabled.args = {
  className: "btn-primary",
  disabled: true,
  children: "foo",
};