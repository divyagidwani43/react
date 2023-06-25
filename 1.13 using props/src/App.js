import One from "./components/1addParameters";

function App() {
  const object_name = [
    {
      name_here: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <One
        any_name={object_name[0].name_here}
        any_name_1={object_name[0].title}
        any_name_2={object_name[0].amount}
      ></One>
      <One
        any_name={object_name[1].id}
        any_name_1={object_name[1].title}
        any_name_2={object_name[1].amount}
      ></One>
      <One
        any_name={object_name[2].id}
        any_name_1={object_name[2].title}
        any_name_2={object_name[2].amount}
      ></One>
    </div>
  );
}
//itle='Toilet Paper' one way to access
//title = {expenses[0].title} another way
//but they do no activity as for now

export default App;
