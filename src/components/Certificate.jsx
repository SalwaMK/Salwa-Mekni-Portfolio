const Certificate = (props) =>
{
    return (
        <div class="certificate">
            <a href={props.link1}><span>{props.c1}</span></a>
            <a href={props.link2}><span>{props.c2}</span></a>
            <a href={props.link3}><span>{props.c3}</span></a>
            <a href={props.link4}><span>{props.c4}</span></a>
            <a href={props.link5}><span>{props.c5}</span></a>
        </div>
    );
}

export default Certificate;