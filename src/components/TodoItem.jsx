const TodoItem = ({ text, isCompleted, isDeleted = false }) => {
  if (isDeleted) return null;

  return (
    <li className="todo">
      {isCompleted ? <del className="completed">{text}</del> : text}
      {isCompleted && " ✔"}
    </li>
  );
};

export default TodoItem;
