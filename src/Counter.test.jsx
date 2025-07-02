import { render,screen,fireEvent } from "@testing-library/react";
import { test,expect } from "vitest";
import '@testing-library/jest-dom';
import Counter from "./Counter";


test('find Heading Content',()=>{
render(<Counter />)
const findh1=screen.getByText('Welcome to Counter Program')
expect (findh1).toBeInTheDocument();
})

test('find Button Content',()=>{
render(<Counter />)
const buttonvalue=screen.getByText('IncValue');
expect (buttonvalue).toBeInTheDocument();
})

test('find default state value',()=>{
render(<Counter />)
const counterValue=screen.getByTestId('defaultvalue');
expect(counterValue).toHaveTextContent('Default Value: 0');
})

test('find state value when i am click IncButton',()=>{
render(<Counter />)

const incrementBtn=screen.getByTestId('increment-btn');
fireEvent.click(incrementBtn);
const counterValue=screen.getByTestId('defaultvalue');
expect(counterValue).toHaveTextContent('Default Value: 10');

});

test('find state value when i am click DecButton',()=>{
render(<Counter />)
const decrementBtn=screen.getByTestId('decrement-btn');
fireEvent.click(decrementBtn);
const deccounterValue=screen.getByTestId('defaultvalue');
expect(deccounterValue).toHaveTextContent('Default Value: -5');

});