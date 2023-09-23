import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { restaurantList } from "../../constants";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(restaurantList),
  });
});

test("Search Results On Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const searchBtn = body.getByTestId("search-btn");
});

test("Restaurants Should Load On Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(4);
});

test("Search For String On Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  fireEvent.change(input, {
    target: {
      value: "karachi"
    }
  })
  const searchButton = body.getByTestId("search-btn");
  fireEvent.click(searchButton);
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(2);
  
});
