import {render, screen} from '@testing-library/react';
import App from './App';

test('renders react App component',()=>{
  render(<App/>);
  const headingElement = screen.getByText(/hello/i);

  expect(headingElement).toBeInTheDocument();


})