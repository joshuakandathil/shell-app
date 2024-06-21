import React, { Suspense, lazy } from "react";
import "./App.css";

const TodoList = lazy(() => import("TodoApp/TodoList"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Todos...</div>}>
        <TodoList />
      </Suspense>

      <div className="container">This is my home page</div>
    </div>
  );
}

export default App;
