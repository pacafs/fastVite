import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Message from "./components/Message";
import Button from "./components/Button";
import { useState } from "react";
import axios from 'axios';


export default function NewApp() {
    const [refreshToken, setRefreshToken] = useState<string>("");

    const [AlertIsVisible, setAlertVisibility] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ country: string | null; animal: string | null }>({ country: null, animal: null });

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/tasks");
            console.log(response);
        } catch (error) {
            console.error("Test request error", error);
        }
    };

    const signUp = async () => {
        try {
            const response = await axios.post("http://localhost:8000/users/register", 
                { 
                  username: "pacafs",
                  email: "test@gmail.com",
                  password: "password"
                }
            );
            console.log("Sign up successful", response.data);
        } catch (error) {
            console.error("Sign up error", error);
        }
    };

    const login = async () => {
        try {
            const response = await axios.post("http://localhost:8000/users/login", {
                username: "pacafs",
                password: "password"
            });
            // Store the authentication token for subsequent requests
            setRefreshToken(response.data.refresh_token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access_token}`;
            console.log("Login successful", response.data);
        } catch (error) {
            console.error("Login error", error);
        }
    };

    const logout = async () => {
        try {
            const response = await axios.post("http://localhost:8000/users/logout", {
                refresh_token: refreshToken
            });
            delete axios.defaults.headers.common["Authorization"];
            console.log("Logged out successfully", response.data);
        } catch (error) {
            console.error("Logout error", error);
        }
    };
    const getRefreshToken = async () => {
        try {
            const response = await axios.post("http://localhost:8000/users/refresh", {
                refresh_token: refreshToken
            });

            setRefreshToken(response.data.refresh_token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access_token}`;
            console.log("Set refresh token successfully", response.data);
        } catch (error) {
            console.error("Refresh token error", error);
        }
    };


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
                <Button color="neutral" onClick={() => {setAlertVisibility(!AlertIsVisible); fetchData()}}>
                    {AlertIsVisible ? "Hide" : "Show"}
                </Button>
            </div>
            <div className="flex justify-center pt-10 mb-1">
                <Button color="neutral" onClick={() => {signUp()}}>
                    Sign Up
                </Button>
            </div>
            <div className="flex justify-center pt-10 mb-1">
                <Button color="neutral" onClick={() => {login()}}>
                    Login
                </Button>
            </div>
            <div className="flex justify-center pt-10 mb-1">
                <Button color="neutral" onClick={() => {getRefreshToken()}}>
                    Refresh Token
                </Button>
            </div>
            <div className="flex justify-center pt-10 mb-1">
                <Button color="neutral" onClick={() => {logout()}}>
                    Logout
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
            <div className="grid grid-cols-2 gap-4">
                <ListGroup items={items} heading="Countries" onSelectItem={(item) => message_log(item, 'country')} />
                <ListGroup items={animals} heading="Animals" onSelectItem={(item) => message_log(item, 'animal')} />
            </div>
        </div>
    )
}