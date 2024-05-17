import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import "@testing-library/jest-dom";

// test("renders learn react link", () => {
//   render(
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   );
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("render react app", () => {
  render(
    <Provider store={Store}>
      <App />
    </Provider>
  );
});
