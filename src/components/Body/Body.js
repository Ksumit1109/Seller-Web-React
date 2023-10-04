import React, { useState, useEffect } from "react";
import InputField from "./Inputs and buttons/InputField";
import ItemList from "./Items/ItemList";

const Body = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedItems = Object.keys(localStorage)
      .filter(key => key.startsWith("item_"))  // Assuming your keys start with "item_"
      .map(key => JSON.parse(localStorage.getItem(key)));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  const handleItemSubmit = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    // Save the updated item to local storage using its ID as the key
    localStorage.setItem(`item_${newItem.ID}`, JSON.stringify(newItem));
  };

  return (
    <>
      <InputField onItemSubmit={handleItemSubmit} />
      <ItemList items={items} />
    </>
  );
};

export default Body;
