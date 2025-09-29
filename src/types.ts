export interface Item {
  id: number;
  name: string;
  checked: boolean;
  subItems: Item[];
}

export interface Handlers {
  handleAdd: (parentId: number | null, val: string) => void;
  handleChecked: (id: number, checked: boolean) => void;
  handleEdit: (id: number, val: string) => void;
  handleDelete: (id: number) => void;
}
