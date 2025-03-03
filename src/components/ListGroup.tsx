function ListGroup() {

    const items = [
        { id: 1, name: "Grocery Shopping" },
        { id: 2, name: "Doctor's Appointment" },
        { id: 3, name: "Gym Workout" },
        { id: 4, name: "Read a Book" },
        { id: 5, name: "Finish Project Report" },
    ]

    const items_list = items.map((item) => {
        return <li key={item.id}>{item.name}</li>
    })

    return (<ul>
        {items_list}
    </ul>)
}

export default ListGroup;