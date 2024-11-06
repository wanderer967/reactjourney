import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana"];
  const fruits = [
    { name: "Apple", price: 18, emoji: "🍎", soldout: false },
    { name: "Mango", price: 7, emoji: "🥭", soldout: true },
    { name: "Orange", price: 2, emoji: "🍊", soldout: false },
    { name: "Avocado", price: 9, emoji: "🥑", soldout: true },
    { name: "Coconut", price: 6, emoji: "🥥", soldout: true },
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
