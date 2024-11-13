import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span className={styles.delete}>
          <button onClick={() => handleDelete(item)}>x</button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
