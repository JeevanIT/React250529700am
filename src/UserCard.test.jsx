import { render,screen,fireEvent } from "@testing-library/react";
import { test,expect } from "vitest";
import '@testing-library/jest-dom';
import UserCard from "./UserCard";

test('render name and email',()=>{
    render(<UserCard name='Aadhya' email='aadhya@gmail.com'/>);

    const nameElement=screen.getByTestId('user-name');
    const emailElement=screen.getByTestId('user-email');

    expect(nameElement).toHaveTextContent('Aadhya');
    expect(emailElement).toHaveTextContent('aadhya@gmail.com');
})