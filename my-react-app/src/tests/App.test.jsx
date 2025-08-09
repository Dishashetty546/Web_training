import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

test('App test', () => {
    render(<App />);
    const headingElement = screen.getByText(/React vite testing/i);
    expect(headingElement).toBeInTheDocument();
});
