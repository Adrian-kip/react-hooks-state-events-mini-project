import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

const CATEGORIES = ["All", "Code", "Food"];

test("category buttons reflect selected state and call callback", () => {
  // 1. First render with "All" selected
  const mockOnSelectCategory = jest.fn();
  const { rerender } = render(
    <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory="All"
      onSelectCategory={mockOnSelectCategory}
    />
  );

  // Verify initial state
  const allButton = screen.getByRole('button', { name: "All" });
  expect(allButton).toHaveClass('selected');

  // 2. Simulate clicking "Code" button
  const codeButton = screen.getByRole('button', { name: "Code" });
  fireEvent.click(codeButton);
  
  // Verify callback was called
  expect(mockOnSelectCategory).toHaveBeenCalledWith("Code");

  // 3. Re-render with "Code" as the new selectedCategory
  rerender(
    <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory="Code" // Now Code is selected
      onSelectCategory={mockOnSelectCategory}
    />
  );

  // Verify new selected state
  expect(codeButton).toHaveClass('selected');
  expect(allButton).not.toHaveClass('selected');
});