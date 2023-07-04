import { FaAngleRight } from 'react-icons/fa'
const Project = (props) =>
{
    return (
        <div className="rect1">
            <h1>{props.title}</h1>
            <p className="p1">{props.para}</p>
            <a href={props.link} className="link"> Link to project<FaAngleRight /> </a>
        </div>
    );
}

export default Project;