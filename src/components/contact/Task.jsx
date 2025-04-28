import { useImmer } from "use-immer";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Task = () => {
  const [items, setItems] = useImmer([]);

  const handleOnSubmit = (item) => {
    setItems((draft) => {
      draft.push(item);
    });
  };

  return (
    <>
      <TaskForm onSubmit={handleOnSubmit} />
      <TaskList items={items} />
    </>
  );
};

export default Task;
