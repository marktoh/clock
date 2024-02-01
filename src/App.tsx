import Clock from "./components/clock";
import ToDoList from "./components/to-do-list";
import ThemeBar from "./components/theme-bar";

import store from "../store";

function App() {
  const { themeButtons, tasks } = store;
  return (
    <main className="min-h-screen dark:bg-gray-900">
      <ThemeBar buttons={themeButtons} />
      <section className="max-w-96 mx-auto">
        <Clock />
      </section>
      <section>
        <ToDoList tasks={tasks} />
      </section>
    </main>
  );
}

export default App;
