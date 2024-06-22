import React, { Suspense } from "react";
import "./App.css";

const TodoApp = React.lazy(() => import("TodoApp/TodoWrapper"));

const App: React.FC = () => {
  return (
    <div className="shell">
      <h1 style={{ marginBottom: "20px" }}>Container App</h1>

      <Suspense fallback={<div>Loading Todos...</div>}>
        <TodoApp />
      </Suspense>
    </div>
  );
};

export default App;
