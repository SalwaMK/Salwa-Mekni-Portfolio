const Navbar = (props) =>
{
    return (
        <nav className="nav">
            <h1><span>S</span>alwa <span>M</span>ekni</h1>
            <ul>
                <li><a href={props.home}>Home</a></li>
                <li><a href={props.about}>About</a></li>
                <li><a href={props.cert}>Certificates</a></li>
                <li><a href={props.skill}>Skills</a></li>
                <li><a href={props.proj}>Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;