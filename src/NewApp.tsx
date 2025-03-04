import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Message from "./components/Message";
import Button from "./components/Button";

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

    const handleClick = () => {
        console.log("Button clicked");
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center pt-10 mb-10">
                <Alert>
                    <Message />
                </Alert>
            </div>
            <div className="flex justify-center">
                <Button color="neutral" onClick={handleClick}>Click me</Button>
            </div>
            <h1 className="text-6xl font-bold text-center">
                Lists
            </h1>
            <ListGroup items={items}   heading="Countries" onSelectItem={console_log_item} />
            <ListGroup items={animals} heading="Animals" onSelectItem={console_log_item} />
        </div>
    )
}