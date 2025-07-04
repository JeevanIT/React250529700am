import { render,screen,fireEvent } from "@testing-library/react";
import { test,expect } from "vitest";
import '@testing-library/jest-dom';
import ShowText from "./ShowText";

test('Show Paragraph on button Click',()=>{
    render(<ShowText />);
    const btncontent=screen.getByTestId('Show');
    fireEvent.click(btncontent);

    const paraid=screen.getByText(/Conditionally Visible/i)
    expect(paraid).toBeInTheDocument();

});