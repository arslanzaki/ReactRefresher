import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check If Logo Is Loaded
  const logo = header.getAllByTestId("logo"); // Gives Array
  // const logo = header.getByTestId("logo"); // Gives Single
  expect(logo[0].src).toBe("http://localhost/dummy.png")
  
});

test("cart should have 0 items on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // Check If Cart Is 0 On Initial Rendering
  const cart = header.getByTestId("cart"); // Gives Single
  expect(cart.innerHTML).toBe("Cart - 0")
  
});
