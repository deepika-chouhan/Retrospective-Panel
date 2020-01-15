import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Section from './Section';

test("renders 'What went well' section", () => {
  const { getByText, container } = render(<Section heading={"What went well"} id={0}/>);
  const header = getByText(/What went well/i);
  expect(header).toBeInTheDocument();
  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("+"));
  const textArea = container.querySelectorAll('textarea');
  expect(textArea.length).toEqual(3);
  expect(textArea[0]).toBeVisible();
});

test("renders 'What went well' section", () => {
    const { getByText } = render(<Section heading={"What can be improved"} id={1}/>);
    const header = getByText(/What can be improved/i);
    expect(header).toBeInTheDocument();
  });

  test("renders 'What went well' section", () => {
    const { getByText } = render(<Section heading={"Start doing"} id={2}/>);
    const header = getByText(/Start doing/i);
    expect(header).toBeInTheDocument();
  });

  test("renders 'What went well' section", () => {
    const { getByText } = render(<Section heading={"Action items"} id={3}/>);
    const header = getByText(/Action items/i);
    expect(header).toBeInTheDocument();
  });