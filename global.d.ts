interface Dish {
  _id: string;
  name: string;
  description: string;
  price: number | "";
  size: string;
  type: 
}

type NewDish = Omit<Dish, "_id">;


type DishType = "entree" | "dessert" | "side" | "drink" | "";

