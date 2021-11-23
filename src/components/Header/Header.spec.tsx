import { render } from "@testing-library/react";
import { ReactNode } from "react";

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }: { children: ReactNode }) => children,
  };
});
