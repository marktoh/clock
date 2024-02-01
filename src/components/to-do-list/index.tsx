import { FC } from "react";
import { Toaster } from "sonner";
import Task, { TaskType } from "./Task";

interface ToDoListProps {
  tasks: TaskType[];
}
const ToDoList: FC<ToDoListProps> = ({ tasks }) => {
  return (
    <div className="mx-auto max-w-96">
      <Toaster richColors position="top-right" />
      <div className="flex flex-col gap-2">
        {tasks?.map((task: TaskType) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
