import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.mock("axios");

describe("App", () => {
  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

  await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  // test('fetches stories from an API and fails', async () => {
  //   ...
  // });
});
