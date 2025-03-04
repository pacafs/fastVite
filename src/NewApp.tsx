import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";

export default function NewApp() {

    const [AlertIsVisible, setAlertVisibility] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ country: string | null; animal: string | null }>({ country: null, animal: null });


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
        const message_log = (item: string, type: string) => {
        console.log(item);
        setSelectedItem(prevState => ({ ...prevState, [type]: item })); // Update the specific type(country or animal) in the state
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center pt-10 mb-10">
                <Button color="neutral" onClick={() => setAlertVisibility(!AlertIsVisible)}>
                    {AlertIsVisible ? "Try again" : "Show my combo"}
                </Button>
            </div>
            <div className="flex justify-center pt-10 mb-10">
                {AlertIsVisible && (
                    <Alert onClose={() => setAlertVisibility(false)}>
                        <Message country={selectedItem.country || ''} animal={selectedItem.animal || ''} />
                    </Alert>
                )}
            </div>
            <h1 className="text-6xl font-bold text-center">
                Lists
            </h1>
            <ListGroup items={items}   heading="Countries" onSelectItem={(item) => message_log(item, 'country')} />
            <ListGroup items={animals} heading="Animals" onSelectItem={(item) => message_log(item, 'animal')} />
        </div>
    )
}