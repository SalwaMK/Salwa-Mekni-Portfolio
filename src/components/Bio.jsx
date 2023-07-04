const Bio = (props) =>
{
    return (
        <div className="bio">
            <h3>Who am I ?</h3>
            <h2>Hello</h2>
            <p>{props.text}</p>
        </div>
    );
}

export default Bio;