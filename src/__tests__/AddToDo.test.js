import AddToDoForm from "../Components/AddToDoForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import Store from "../Store/Store";

describe("Add to form testCases", () => {
  it("should render AddTo Form component", () => {
    render(
      <Provider store={Store}>
        <AddToDoForm />
      </Provider>
    );
  });

  it("Should load one input box inside add to form", () => {
    render(
      <Provider store={Store}>
        <AddToDoForm />
      </Provider>
    );

    const inputBox = screen.getByRole("textbox");
    const checkPlaceholder = screen.getByPlaceholderText("Add Todo");
    expect(inputBox).toBeInTheDocument(1);
    expect(checkPlaceholder).toBeInTheDocument();
  });

  it("Should load Button inside inside add to form", () => {
    render(
      <Provider store={Store}>
        <AddToDoForm />
      </Provider>
    );

    const addButton = screen.getByRole("button");

    expect(addButton).toBeInTheDocument();
  });
});
