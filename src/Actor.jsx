function Actor({ cardActor }) {
    return (
        <div className="row g-4">
            {cardActor.map(actor => (
                <div className="col-md-3 mb-3 " key={"attore-" + actor.id}>
                    <div className="card">
                        <img src={actor.image} className="card-img-top" alt={actor.name} style={{ height: '250px', objectFit: 'cover' }} />
                        <div className="card-header">{actor.name}</div>
                        <div className="card-body">
                            <p className="card-text"><strong>Anno nascita:</strong> {actor.birth_year}</p>
                            <p className="card-text"><strong>Nazionalità:</strong> {actor.nationality}</p>
                            <p className="card-text"><strong>Riconoscimenti:</strong> {Array.isArray(actor.awards) ? actor.awards.join(' - ') : actor.awards}</p>
                            <p className="card-text"><strong>Biografia:</strong> {actor.biography}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Actor;