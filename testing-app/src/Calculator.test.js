import { fireEvent, render, screen } from "@testing-library/react";
import Calender from "./Calculator";

test('check Add', () => {
    render(<Calender />);
    fireEvent.change(screen.getByTestId('num1'), { target: { value: '5' } });
    fireEvent.change(screen.getByTestId('num2'), { target: { value: '75' } });
    fireEvent.click(screen.getByText('Add')); 
    expect(screen.getByText('80')).toBeInTheDocument();
});
