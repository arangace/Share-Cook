import * as React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../Button';

it('Check default button is inactive', async () => {
    render(<Button />)
    expect(screen.queryByText('active')).not.toBe(null);
})
it('check button press', async () => {
    render(<Button />)
    act(() => {
        const clickButton = screen.getByTestId('buttonToBePressed');
        fireEvent.click(clickButton);
    })
    expect(screen.queryByText('active')).not.toBe(null);
})
