const Photo = (props) =>
{
    return (
        <img src={props.src} alt={props.name} className={props.class} />
    );
}

export default Photo;