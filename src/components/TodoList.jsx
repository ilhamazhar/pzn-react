import TodoItem from "./TodoItem";

const TodoList = () => {
  const data = [
    { id: 1, text: "Learn HTML", isCompleted: true, isDeleted: true },
    { id: 2, text: "Learn CSS", isCompleted: false },
    { id: 3, text: "Learn JS", isCompleted: true },
    { id: 4, text: "Learn React", isCompleted: false },
    { id: 5, text: "Learn React Router", isCompleted: true },
  ];

  const todos = data.map((todo) => <TodoItem key={todo.id} {...todo} />);
  return <ul>{todos}</ul>;
};

export default TodoList;
