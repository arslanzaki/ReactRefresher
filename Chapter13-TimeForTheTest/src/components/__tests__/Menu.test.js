import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import Header from "./../Header";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  });
});

test("Add Items To Cart", async () => {
  const resMenu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(resMenu.getByTestId("menu")));
  const addBtn = resMenu.getAllByTestId("addBtn")
  
  fireEvent.click(addBtn[0]);
  const cart = body.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 1");
});
