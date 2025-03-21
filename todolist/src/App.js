import './assets/styles/main.scss';
import Header from "./components/Header";
import TodoList from "./components/tasks/TodoList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskProvider>
        <TodoList />
      </TaskProvider>
    </div>
  );
}

export default App;
