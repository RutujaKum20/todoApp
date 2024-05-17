import "./App.css";
import bg from "./Assets/bg.png";
import ToDoListCard from "./Components/ToDoListCard";

function App() {
  return (
    <>
      <img
        className=" h-screen w-screen absolute "
        src={bg}
        alt="background-Img"
      />
      <div className="container mx-auto flex items-center justify-center h-screen">
        <ToDoListCard />
      </div>
    </>
  );
}

export default App;
