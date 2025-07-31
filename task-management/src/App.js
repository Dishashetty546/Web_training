import React from "react";
import { TaskProvider } from "../src/context/TaskContext.js";
import TaskForm from "../src/components/TaskForm.js";
import TaskList from "../src/components/TaskList.js";

const App = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <style>
          {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #7b5151ff;
            padding: 20px;
          }

          .app-container {
            max-width: 600px;
            margin: auto;
            background-color: white;
            padding: 30px;
            border: 2px solid #333;
            border-radius: 8px;
          }

          h1 {
            color: #416942ff;
            text-align: center;
            margin-bottom: 20px;
          }
          `}
        </style>

        <h1>Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
