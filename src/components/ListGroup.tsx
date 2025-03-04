import { useState } from "react";

// Props => { items: [], heading: string }
interface ListGroupProps {
    items: string[];
    heading: string;
    //(item: string) => void
    onSelectItem: (item: string, type: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const items_list = items.map((item, index) => {
        return <li 
                  className={`list-row cursor-pointer ${index === selectedIndex && 'bg-docs-bg'}`}
                  key={index} 
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item, heading); // heading is also the type of the item in this case "country" or "animal
                  }}>
                    {item}
                </li>
    })

    return (
        <div className="bg-base-100 rounded-box shadow-md text-center mt-10">
            <div className="mb-4">
                <h2 className="text-3xl font-bold">{heading}</h2>
            </div>
            <ul className="list bg-base-100 rounded-box shadow-md">
                {items_list}
            </ul>
        </div>
    )
}

export default ListGroup;