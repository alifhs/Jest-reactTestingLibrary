import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

jest.mock("axios");

const f = () => <div>Hello</div>;

describe("App", () => {
  test("fetches stories from an API and displays them", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    const promise = Promise.resolve({ data: { hits: stories } });

    axios.get.mockImplementationOnce(() => promise);

    render(<App />);

    act(() => {
      userEvent.click(screen.getByRole("button", { name: "Fetch Stories" }));
    });

    expect(await screen.findAllByRole("listitem")).toHaveLength(2);
  });

  // test('fetches stories from an API and fails', async () => {
  //   ...
  // });
});
