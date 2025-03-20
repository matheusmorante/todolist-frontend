import './assets/styles/main.scss';
import Header from "./components/Header";
import Tasks from "./components/tasks/Tasks";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TaskProvider>
        <Tasks />
      </TaskProvider>
    </div>
  );
}

export default App;
