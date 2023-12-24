import AddTodo from "./components/AddTodo";
import { Main } from "./components/styles/Add.styles";


function App() {
  return (
    <div className="App">
      <Main>
        <AddTodo />
      </Main>
    </div>
  );
}

export default App;
