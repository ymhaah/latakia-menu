import { useState } from "react";

import Header from "./components/Header";
// import AvatarGroup from "./components/AvatarGroup";
import FoodCardItem from "./components/FoodCardItem";
import Footer from "./components/Footer";

type MenuItemsT = {
    title: string;
    image: string;
    price: number;
    description: string;
    label: string[];
    calories: number;
    offer?: number;
}[];

function App() {
    const [menuItems] = useState<MenuItemsT>([
        {
            title: "Halloumi",
            image: "/Halloumi.png",
            price: 12.99,
            description: "A delicious and classic dish.",
            label: ["Vegan", "Gluten Free"],
            calories: 300,
            offer: 10,
        },
        {
            title: "Halloumi-teller-02",
            image: "/Halloumi-teller-02.jpg",
            price: 15.99,
            description: "A mouth-watering delight.",
            label: ["Dairy Free", "Nut Free"],
            calories: 550,
        },
        {
            title: "Francisco",
            image: "/francisco.jpg",
            price: 14.49,
            description: "A favorite among food lovers.",
            label: ["Nut Free"],
            calories: 400,
            offer: 20,
        },
        {
            title: "Fajita",
            image: "/Fajita.png",
            price: 10.99,
            description: "Fresh and healthy choice.",
            label: ["Gluten Free"],
            calories: 200,
        },
        {
            title: "Crispy-Sandwich",
            image: "/Crispy-Sandwich.jpg",
            price: 8.99,
            description: "A popular street food item.",
            label: ["Spicy"],
            calories: 350,
        },
        {
            title: "Crispy-Box-02",
            image: "/Crispy-Box-02.jpg",
            price: 13.99,
            description: "Delicately prepared with fresh ingredients.",
            label: ["Low Calorie", "Gluten Free"],
            calories: 250,
        },
        {
            title: "Coleslaw",
            image: "/coleslaw.jpg",
            price: 22.99,
            description: "Cooked to perfection.",
            label: ["Nut Free", "Gluten Free"],
            calories: 600,
        },
        {
            title: "China-02",
            image: "/china-02.jpg",
            price: 6.99,
            description: "A sweet treat to enjoy.",
            label: ["Dairy Free"],
            calories: 400,
            offer: 15,
        },
        {
            title: "Chilli-Cheese-Pommes-01",
            image: "/Chilli-Cheese-Pommes-01.jpg",
            price: 11.99,
            description: "Crispy and flavorful.",
            label: ["Nut Free"],
            calories: 700,
        },
        {
            title: "Chili cheese bites",
            image: "/Chili cheese bites.jpg",
            price: 9.49,
            description: "Packed with nutritious veggies.",
            label: ["Vegan", "Gluten Free"],
            calories: 350,
        },
        {
            title: "Batata",
            image: "/Batata.png",
            price: 7.99,
            description: "A comforting meal.",
            label: ["Nut Free"],
            calories: 450,
        },
        {
            title: "Baby Q",
            image: "/Baby Q.jpg",
            price: 5.99,
            description: "A quick and tasty snack.",
            label: ["Nut Free"],
            calories: 300,
        },
    ]);

    return (
        <>
            <Header />
            <main className="menu">
                <div className="Container">
                    <h1>Our Menu</h1>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <FoodCardItem
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    description={item.description}
                                    label={item.label}
                                    calories={item.calories}
                                    offer={item.offer}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
