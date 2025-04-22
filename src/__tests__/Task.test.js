import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../components/Task';

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.getByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.getByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  const onDelete = jest.fn();
  render(<Task text="Buy rice" category="Food" onDelete={onDelete} />);
  
  const deleteButton = screen.getByRole('button', { name: /X/i });
  fireEvent.click(deleteButton);
  
  expect(onDelete).toHaveBeenCalled();
});