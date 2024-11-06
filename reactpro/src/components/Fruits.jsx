import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana"];
  const fruits = [
    { name: "Apple", price: 18, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Orange", price: 2, emoji: "🍊" },
    { name: "Avocado", price: 9, emoji: "🥑" },
    { name: "Coconut", price: 6, emoji: "🥥" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}
