import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "./App";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input id="search" type="text" value={value} onChange={onChange} />
//     </div>
//   );
// }
describe('Search', () => {
  test('calls the onChange callback handler', async () => {
    const onChange = jest.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    // await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    // expect(onChange).toHaveBeenCalledTimes(10);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});