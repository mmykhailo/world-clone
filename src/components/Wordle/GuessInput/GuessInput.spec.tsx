import React, { createRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GuessInput from ".";
import TGuessInput from "./GuessInput.types";

describe("GuessInput Component", () => {
  it("renders input with correct properties", () => {
    const mockHandleChange = jest.fn();
    const mockHandleKeyDown = jest.fn();
    const inputRefs = { current: [] };

    render(
      <GuessInput
        index={0}
        letter="A"
        handleChange={mockHandleChange}
        handleKeyDown={mockHandleKeyDown}
        inputRefs={inputRefs}
      />
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("A");
    expect(input).toHaveAttribute("maxlength", "1");
    expect(input).toHaveStyle("text-transform: uppercase");
  });

  it("calls handleChange when input value changes", () => {
    const mockHandleChange = jest.fn();
    const mockHandleKeyDown = jest.fn();
    const inputRefs = { current: [] };

    render(
      <GuessInput
        index={0}
        letter=""
        handleChange={mockHandleChange}
        handleKeyDown={mockHandleKeyDown}
        inputRefs={inputRefs}
      />
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "B" } });

    expect(mockHandleChange).toHaveBeenCalledWith(0, "B");
  });

  it("calls handleKeyDown when a key is pressed", () => {
    const mockHandleChange = jest.fn();
    const mockHandleKeyDown = jest.fn();
    const inputRefs = { current: [] };

    render(
      <GuessInput
        index={0}
        letter=""
        handleChange={mockHandleChange}
        handleKeyDown={mockHandleKeyDown}
        inputRefs={inputRefs}
      />
    );

    const input = screen.getByRole("textbox");

    fireEvent.keyDown(input, { key: "Backspace" });

    expect(mockHandleKeyDown).toHaveBeenCalledWith(0, expect.objectContaining({ key: "Backspace" }));
  });

  it("sets ref correctly", () => {
    const mockHandleChange = jest.fn();
    const mockHandleKeyDown = jest.fn();
    const inputRefs = { current: [] };

    render(
      <GuessInput
        index={0}
        letter=""
        handleChange={mockHandleChange}
        handleKeyDown={mockHandleKeyDown}
        inputRefs={inputRefs}
      />
    );

    expect(inputRefs.current[0]).toBeInstanceOf(HTMLInputElement);
  });
});