import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library amoing engineers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components. ',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'A shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
