import './assets/styles/main.scss';
import Todolist from "./components/tasks/Todolist";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Todolist />
      </TaskProvider>
    </div>
  );
}

export default App;
