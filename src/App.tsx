import { useState } from "react";
import "./App.css";
import List from "./components/List";
import type { Item } from "./types";

// The task is to visualize data structure, with ability to:
// - add items to any level
// - edit item name on any level
// - check/uncheck item on each level (higher level item shouldn't be checked if lower level items include unchecked)
// - delete item on any level
//
// Data structure:

const data: Item[] = [
  {
    id: 1,
    name: "Test1",
    checked: false,
    subItems: [
      {
        id: 11,
        name: "Test11",
        checked: false,
        subItems: [{ id: 13, name: "Test13", checked: false, subItems: [] }],
      },
      { id: 12, name: "Test12", checked: false, subItems: [] },
    ],
  },
  { id: 2, name: "Test2", checked: false, subItems: [] },
  { id: 3, name: "Test3", checked: false, subItems: [] },
  { id: 4, name: "Test4", checked: false, subItems: [] },
  { id: 5, name: "Test5", checked: false, subItems: [] },
  { id: 6, name: "Test6", checked: false, subItems: [] },
  { id: 7, name: "Test7", checked: false, subItems: [] },
  { id: 8, name: "Test8", checked: false, subItems: [] },
  { id: 9, name: "Test9", checked: false, subItems: [] },
  { id: 10, name: "Test10", checked: false, subItems: [] },
];

function App() {
  const [itemsList, setItemsList] = useState<Item[]>(data);

  const updateItemsTree = (
    items: Item[],
    id: number,
    callback: (item: Item) => Item
  ): Item[] => {
    return items.map((item) => {
      if (item.id === id) return callback(item);

      return {
        ...item,
        subItems: updateItemsTree(item.subItems, id, callback),
      };
    });
  };

  const addItem = (parentId: number | null, name: string) => {
    const newItem: Item = {
      id: itemsList.length + 1,
      name,
      checked: false,
      subItems: [],
    };

    if (!parentId) {
      setItemsList((prevState) => [...prevState, newItem]);
    } else {
      setItemsList((prevState) =>
        updateItemsTree(prevState, parentId, (item) => ({
          ...item,
          subItems: [...item.subItems, newItem],
        }))
      );
    }
  };

  const toggleChecked = (id: number, checked: boolean) => {
    const toggle = (items: Item[]): Item[] =>
      items.map((item) => {
        if (item.id === id) return { ...item, checked };

        const newSubItem = toggle(item.subItems);

        const allChildrenChecked =
          newSubItem.length > 0 && newSubItem.every((s) => s.checked);

        return {
          ...item,
          subItems: newSubItem,
          checked: newSubItem.length ? allChildrenChecked : item.checked,
        };
      });

    setItemsList((prevState) => toggle(prevState));
  };

  const editItemName = (id: number, name: string) => {
    setItemsList((prevState) =>
      updateItemsTree(prevState, id, (item) => ({ ...item, name }))
    );
  };

  const deleteItem = (id: number) => {
    const del = (items: Item[]): Item[] => {
      let result: Item[] = [];

      for (const item of items) {
        if (item.id === id) {
          result = [...result, ...item.subItems];
        } else {
          result.push({
            ...item,
            subItems: del(item.subItems),
          });
        }
      }

      return result;
    };

    setItemsList((prevState) => del(prevState));
  };

  return (
    <>
      <List
        items={itemsList}
        isChild={false}
        handleAdd={addItem}
        handleChecked={toggleChecked}
        handleEdit={editItemName}
        handleDelete={deleteItem}
      />
    </>
  );
}

export default App;
