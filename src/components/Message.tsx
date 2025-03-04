interface MessageProps {
    country: string;
    animal: string;
}

const Message = ({ country, animal }: MessageProps) => {
  return (
    <>
        {country && animal ? (
        <div>
            <p>I'm just a {animal} living in {country}</p>
        </div>
        ) : (
        <div>
            <p>Please select a country and an animal</p>
        </div>
        )}
    </>
  )
}

export default Message