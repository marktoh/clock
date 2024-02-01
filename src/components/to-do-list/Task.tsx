import { FC, MouseEvent } from "react";
import { toast } from "sonner";
import ThumbsUp from "../../assets/icons/ThumbsUp";

interface TaskType {
  id?: number;
  title: string;
  description?: string;
  status?: string;
}

const Task: FC<TaskType> = ({ title, description }) => {
  const handleTaskClick = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const toastTitle = title;
    toast.info(toastTitle, {
      description,
    });
  };
  const handleCompletedClick = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    const toastTitle = title;
    toast.success(toastTitle, {
      description,
    });
  };
  return (
    <div
      className="flex flex-row justify-between border-white border-2 px-4 py-3 rounded gap-2 hover:-translate-y-1 cursor-pointer transition bg-gradient-to-r from-blue-500 to-pink-400 hover:border-blue-200 hover:border-2"
      onClick={handleTaskClick}
    >
      <div className="text-white select-none">{title}</div>
      <div
        className="text-white hover:text-pink-200"
        onClick={handleCompletedClick}
      >
        <ThumbsUp />
      </div>
    </div>
  );
};

export { type TaskType };
export default Task;
