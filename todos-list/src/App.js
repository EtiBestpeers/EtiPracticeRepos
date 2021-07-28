import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
function App() {
  const onDelete = () => {
    console.log("I am ondelete");
  }

  let todos = [
    {
      sno: 1,
      title: "Html",
      desc: "yes"
    },
    {
      sno: 2,
      title: "Javascript",
      desc: "no"
    },
    {
      sno: 3,
      title: "Reactjs",
      desc: "yes"
    }
  ]

  return (
    <>
      <Header title="My Todo List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
export default App;
