import React from 'react';
import { render, screen } from '@testing-library/react';
import {App, MyButton} from './App';

test('renders learn react link', () => {
  render(<App xinfo="" />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
