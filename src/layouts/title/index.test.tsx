/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { Title } from ".";
import { APP_NAME } from "../../constants/app";

jest.mock("next/head", () => {
  return {
    __esModule: true,
    default: function Head({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    },
  };
});

test("top page", () => {
  render(<Title title="" />);

  expect(document.title).toBe(APP_NAME);
});

test("foo page", () => {
  render(<Title title="Foo" />);

  expect(document.title).toBe(`Foo · ${APP_NAME}`);
});
