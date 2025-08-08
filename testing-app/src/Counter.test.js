import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter.js';

test('Counter component increments count', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Click Me/i);
  fireEvent.click(buttonElement);
  const updatedCount = screen.getByText(/clicked 1 Times/i);
  expect(updatedCount).toBeInTheDocument();
});

test('Checking Button Functionality and Initial Count', () => {
  render(<Counter />);
  expect(screen.getByText(/clicked 0 Times/i)).toBeInTheDocument();
  const button = screen.getByRole("button", { name: /Click Me/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.getByText(/clicked 1 Times/i)).toBeInTheDocument();
});
