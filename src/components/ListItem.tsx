import { useState } from "react";
import type { Item, Handlers } from "../types";
import List from "./List";

const ListItem: React.FC<Item & Handlers> = ({
  id,
  name,
  checked,
  subItems,
  handleAdd,
  handleChecked,
  handleEdit,
  handleDelete,
}) => {
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editVal, setEditVal] = useState<string>(name);

  return (
    <li className="mt-4">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={({ target }) => handleChecked(id, target.checked)}
        />
        {isEdit ? (
          <input
            value={editVal}
            onChange={({ target }) => setEditVal(target.value)}
            className="border-2 border-white"
          />
        ) : (
          <span>{name}</span>
        )}

        {isEdit ? (
          <button
            onClick={() => {
              handleEdit(id, editVal);
              setIsEdit(false);
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}

        <button onClick={() => handleDelete(id)}>Delete</button>

        <button onClick={() => setInputVisible(!inputVisible)}>Add</button>
        {inputVisible && (
          <>
            <input
              type="text"
              value={val}
              onChange={({ target }) => setVal(target.value)}
              className="border-2 border-white"
            />
            <button
              onClick={() => {
                handleAdd(id, val);
                setVal("");
                setInputVisible(false);
              }}
            >
              Submit
            </button>
          </>
        )}
      </div>

      <List
        items={subItems}
        isChild
        handleAdd={handleAdd}
        handleChecked={handleChecked}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </li>
  );
};

export default ListItem;
