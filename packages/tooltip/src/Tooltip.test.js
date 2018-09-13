import { anchorPoints } from "@hig/flyout/src";
import Button from "@hig/button";
import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "./Tooltip";

describe("tooltip/Tooltip", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        children: <Button title="Click Me" />,
        content: "Hello World",
        maxHeight: 150,
        onClickOutside: function onClickOutside() {},
        onScroll: function onScroll() {},
        open: true,
        openOnHover: false
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <Tooltip {...otherProps}>{children}</Tooltip>;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
