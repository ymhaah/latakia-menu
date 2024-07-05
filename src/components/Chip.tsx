import React from "react";

type ChipPropsT = {
    children: React.ReactNode;
};

function Chip({ children }: ChipPropsT) {
    return (
        <div className="chip">
            <span>{children}</span>
        </div>
    );
}

export default Chip;
