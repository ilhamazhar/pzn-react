const TaskList = ({ items = [] }) => {
  return (
    <>
      <h1>TaskList</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
