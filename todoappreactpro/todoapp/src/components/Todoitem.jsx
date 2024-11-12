import styles from "./todoitem.module.css";
export default function Todoitem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span className={styles.delete}>
          <button>x</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
