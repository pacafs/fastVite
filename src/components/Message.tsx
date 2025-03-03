function Message() {

    const message = "This is the default message if no name is provided";
    const name = "Pedro";

    return (
        <div>
            {name ? (
                <h1>Hello {name}</h1>
            ) : (
                <h1>{message}</h1>
            )}
        </div>
    )
}

export default Message;