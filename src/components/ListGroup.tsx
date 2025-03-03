function ListGroup() {

    const items = [
        { id: 1, name: "United States" },
        { id: 2, name: "Canada" },
        { id: 3, name: "United Kingdom" },
        { id: 4, name: "Australia" },
        { id: 5, name: "Germany" },
        { id: 6, name: "France" },
        { id: 7, name: "Italy" },
        { id: 8, name: "Spain" },
        { id: 9, name: "Japan" },
        { id: 10, name: "Brazil" },
    ]
    
    const handle_click = (event: React.MouseEvent<HTMLLIElement>) => {
        console.log(event.currentTarget);
    }

    const items_list = items.map((item) => {
        return <li 
                  className="list-row" 
                  key={item.id} 
                  onClick={handle_click}>
                    {item.name}
                </li>
    })
    
    const get_message = () => {
        return items.length === 0 && <p>No items found</p>;
    }


    return (
        <div className="bg-base-100 rounded-box shadow-md text-center mt-10">
        <h1 className="text-6xl font-bold">List</h1>
        <p>{get_message()}</p>
        <ul className="list bg-base-100 rounded-box shadow-md">
            {items_list}
        </ul>
        </div>
    )
}

export default ListGroup;