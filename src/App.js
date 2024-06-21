import React, { Suspense, lazy } from "react";
import "./App.css";

const TodoList = lazy(() => import("TodoApp/TodoList"));

function App() {
  return (
    <div className="shell">
      <h1 style={{ marginBottom: "20px" }}>Container App</h1>

      <Suspense fallback={<div>Loading Todos...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
