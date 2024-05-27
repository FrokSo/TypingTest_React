import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>Lists</h1>
            <ul className="list-group">
                {items.length === 0 ? (
                    <h1>"fgh</h1>
                ) : (
                    <p>
                        {items.map((item, index) => (
                            <li className={selectedIndex === index ?
                                "list-group-item active"
                                : "list-group-item"}
                                key={item}
                                onClick={() => {
                                    setSelectedIndex(index);
                                    onSelectItem(item);
                                }}>
                                {item}
                            </li>
                        ))}
                    </p>
                )}
            </ul>
        </>
    );
}

export default ListGroup;