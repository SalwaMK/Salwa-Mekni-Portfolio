const Card = ({ title, description }) =>
{
    return (
        <div className="card">
            <div class="bg">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
            <div class="blob">

            </div>

        </div>
    );
};

export default Card;