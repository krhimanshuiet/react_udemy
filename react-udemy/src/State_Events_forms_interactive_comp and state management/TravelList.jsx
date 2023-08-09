/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TravelList.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Bags", quantity: 2, packed: true },
// ];
const TravelList = () => {
  const [initialItems, setInitialItems] = useState([]);
  return (
    <div className="app">
      <Logo />
      <Form initialItems={initialItems} setInitialItems={setInitialItems} />
      <PackagingList
        initialItems={initialItems}
        setInitialItems={setInitialItems}
      />

 
      <Stats initialItems={initialItems} />
    </div>
  );
};

export default TravelList;

const Logo = () => {
  return <h1>🌴 Far Away 💼</h1>;
};

// eslint-disable-next-line react/prop-types
const Form = ({ initialItems, setInitialItems }) => {
  const [selected, setSelected] = useState(0);
  const [input, setInput] = useState("");
  function handleAdd(event) {
    event.preventDefault();
    if (selected === 0 || input === "") {
      return;
    }
    setInitialItems([
      ...initialItems,
      {
        id: initialItems.length + 1,
        description: input,
        quantity: selected,
        packed: false,
      },
    ]);
    setInput("");
    setSelected(0);
  }

  return (
    <form className="add-form" onSubmit={handleAdd}>
      <h3>What do you need for your 😊 trip?</h3>
      <select
        value={selected}
        onChange={(event) => setSelected(Number(event.target.value))}
      >
        <option value="0">0</option>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            <span>{item}</span>
            {item === selected && <span>✔️</span>}
          </option>
        ))}
      </select>

      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="Item..."
      />

      <button>Add</button>
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const PackagingList = ({ initialItems, setInitialItems }) => {
  function handleClear() {
    setInitialItems([]);
  }
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            initialItems={initialItems}
            setInitialItems={setInitialItems}
          />
        ))}
      </ul>
      <div style={{ display: "flex", gap: "5px" }}>
        <button
          onClick={() => {
            setInitialItems(
              [...initialItems.sort((a, b) => a.quantity - b.quantity)]
            );
          }}
        >
          sort by input order
        </button>
        <button onClick={handleClear}>clear</button>
      </div>
    </div>
  );
};

const Stats = ({ initialItems }) => {
  return (
    <footer className="stats">
      <em>
        💼 You have {initialItems.length} items in your List , and you already
        selected {initialItems.filter((item) => item.packed).length}
        {initialItems.length > 0
          ? Math.floor(
              (initialItems.filter((item) => item.packed).length /
                initialItems.length) *
                100
            )
          : 0}{" "}
        % of items
      </em>
    </footer>
  );
};

// eslint-disable-next-line react/prop-types
const Item = ({
  id,
  description,
  packed,
  quantity,
  initialItems,
  setInitialItems,
}) => {
  const [check, setCheck] = useState(packed);
  function handleCheck() {
    setInitialItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.packed = !check;
        }
        return item;
      })
    );
    setCheck((prev) => !prev);
  }
  return (
    <li>
      <input type="checkbox" checked={check} onChange={handleCheck} />
      <span>{quantity}</span>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description}
      </span>

      <button
        onClick={() =>
          setInitialItems(initialItems.filter((item) => item.id !== id))
        }
      >
        ❌
      </button>
    </li>
  );
};
