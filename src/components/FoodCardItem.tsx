import { useState } from "react";

import Button from "./Button";
import Chip from "./Chip";

import cardIcon from "../assets/icons/add_shopping_cart.svg";

type FoodCardItemPropsT = {
    title: string;
    image: string;
    price: number;
    description: string;
    label: string[];
    calories: number;
    offer?: number;
};

function FoodCardItem({
    title,
    image,
    price,
    description,
    label,
    calories,
    offer,
}: FoodCardItemPropsT) {
    const [selected, setSelected] = useState(false);

    function selectedItem() {
        setSelected(!selected);
    }

    return (
        <div className="food-card-item">
            <div className="image-wrapper">
                <div className="placeholder"></div>
                <img
                    src={image}
                    alt={title}
                    fetchPriority="high"
                    loading="lazy"
                    title={title}
                />
                {offer && (
                    <span title={`${offer}% off discount`}>{offer}% off</span>
                )}
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="labels">
                    {label.map((item, index) => (
                        <Chip key={index}>{item}</Chip>
                    ))}
                </div>
                <div className="row">
                    <span className="price">${price}</span>
                    <span className="calories">{calories}/Cal</span>
                </div>
            </div>
            <div className="action">
                <Button handleClick={selectedItem} className="add-lg btn-mono">
                    Add To Card{" "}
                    <img src={cardIcon} alt="Add To Card" role="presentation" />
                </Button>
            </div>
        </div>
    );
}

export default FoodCardItem;
