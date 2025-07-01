
import { render,screen } from "@testing-library/react";
import { test,expect } from "vitest";
import '@testing-library/jest-dom';
import Welcome from "./Welcome";


test('Renders Heading',()=>{
render(<Welcome />)

const heading=screen.getByText('Welcome to React Testing');
expect(heading).toBeInTheDocument();



});

test('Renders Paragraph',()=>{
render(<Welcome />)


const paragraph=screen.getByText('This is a simple paragraph for testing');
expect(paragraph).toBeInTheDocument();

});