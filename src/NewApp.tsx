import ListGroup from "./components/ListGroup";

export default function NewApp() {

    const items = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Japan",
        "Brazil",
    ];

    const animals = [
        "Lion",
        "Tiger",
        "Elephant",
        "Giraffe",
        "Zebra",
        "Kangaroo",
        "Panda",
        "Bear",
        "Wolf",
        "Fox",
    ];

    // Function to log the selected item   
    const console_log_item = (item: string) => {
        console.log(item);
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold text-center mt-10">
                Lists
            </h1>
            <ListGroup items={items}   heading="Countries" onSelectItem={console_log_item} />
            <ListGroup items={animals} heading="Animals" onSelectItem={console_log_item} />
        </div>
    )
}
