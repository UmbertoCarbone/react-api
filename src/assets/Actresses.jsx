function Actresses({ cardActresses }) {
    return (
        <div className="row">
            {cardActresses.map(actress => (
                <div className="col-md-3 mb-3" key={"attrice-" + actress.id}>
                    <div className="card">
                        <img src={actress.image} className="card-img-top" alt={actress.name} style={{ height: '250px', objectFit: 'cover' }} />
                        <div className="card-header">{actress.name}</div>
                        <div className="card-body">
                            <p className="card-text"><strong>Anno nascita:</strong> {actress.birth_year}</p>
                            <p className="card-text"><strong>Nazionalità:</strong> {actress.nationality}</p>
                            <p className="card-text"><strong>Riconoscimenti:</strong> {typeof actress.awards === "string" ? actress.awards.split(", ").join(' - ') : actress.awards}</p>
                            <p className="card-text"><strong>Biografia:</strong> {actress.biography}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Actresses;