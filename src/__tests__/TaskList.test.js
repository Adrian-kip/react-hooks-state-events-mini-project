import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TaskList from '../components/TaskList';

const TASKS = [
  { text: 'Buy rice', category: 'Food' },
  { text: 'Save a tenner', category: 'Money' }
];

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});