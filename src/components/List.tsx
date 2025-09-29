import type { Item, Handlers } from "../types";
import ListItem from "./ListItem";

interface ListProps extends Handlers {
  items: Item[];
  isChild: boolean;
}

const List: React.FC<ListProps> = ({
  items,
  isChild,
  handleAdd,
  handleChecked,
  handleEdit,
  handleDelete,
}) => {
  return (
    <ul className={isChild ? "ml-4" : ""}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          {...item}
          handleAdd={handleAdd}
          handleChecked={handleChecked}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default List;
