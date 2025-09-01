import "./App.css";

// The task is to visualize data structure, with ability to:
// - add items to any level
// - edit item name on any level
// - check/uncheck item on each level (higher level item shouldn't be checked if lower level items include unchecked)
// - delete item on any level
//
// Data structure:
// [
//   {
//     id: 1,
//     name: "Test1",
//     checked: false,
//     subItems: [
//       {
//         id: 11,
//         name: "Test11",
//         checked: false,
//         subItems: [{ id: 13, name: "Test13", checked: false, subItems: [] }],
//       },
//       { id: 12, name: "Test12", checked: false, subItems: [] },
//     ],
//   },
//   { id: 2, name: "Test2", checked: false, subItems: [] },
//   { id: 3, name: "Test3", checked: false, subItems: [] },
//   { id: 4, name: "Test4", checked: false, subItems: [] },
//   { id: 5, name: "Test5", checked: false, subItems: [] },
//   { id: 6, name: "Test6", checked: false, subItems: [] },
//   { id: 7, name: "Test7", checked: false, subItems: [] },
//   { id: 8, name: "Test8", checked: false, subItems: [] },
//   { id: 9, name: "Test9", checked: false, subItems: [] },
//   { id: 10, name: "Test10", checked: false, subItems: [] },
// ]

function App() {
  return (
    <>
      <h1>TODO Items</h1>
    </>
  );
}

export default App;
