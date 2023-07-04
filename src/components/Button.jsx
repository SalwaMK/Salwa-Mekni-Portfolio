const Button = (props) =>
{
    return (
        <button onClick={props.func} className={props.class}>{props.content}</button>
    );
}

export default Button;