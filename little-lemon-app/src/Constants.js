import greekSalad from "./images/greek-salad.jpg";
import bruchetta from "./images/bruchetta.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";

export const specialsFoodData = [
  {
    imageUrl: greekSalad,
    dish: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, pepeprs, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.89",
  },
  {
    imageUrl: bruchetta,
    dish: "Bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasonsed with salt and olive oil.",
    price: "$8.89",
  },
  {
    imageUrl: lemonDessert,
    dish: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.89",
  },
];

export const testimonialData = [
  {
    rating: 4.5,
    name: "Alice",
    review: "The food was so delicious and the service was really great, too!",
  },
  {
    rating: 4,
    name: "Bob",
    review:
      "The Bruchetta was so yummy and I ate the whole thing, even though it was quite heavy for one person.",
  },
  {
    rating: 3.5,
    name: "Charlie",
    review:
      "We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Lemon Dessert",
  },
];

export const availableTimes = [
  "17.00",
  "18.00",
  "19.00",
  "20.00",
  "21.00",
  "22.00",
];
