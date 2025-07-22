// import funzioni di React
import { useState, useEffect } from "react"

//url attori e attrici
const urlActor = ("https://lanciweb.github.io/demo/api/actors/")
const urlActresses = ("https://lanciweb.github.io/demo/api/actresses/")


function App() {
  // card full di ogni attore
  const [cardActor, setCardActor] = useState([])
  const [CardActresses, setCardActresses] = useState([])

  //richiamo api con il fetch
  function fetchActor() {
    fetch(urlActor)
      .then((res) => res.json())
      .then(setCardActor)
  }

  function fetchActresses() {
    fetch(urlActresses)
      .then((res) => res.json())
      .then(setCardActresses)
  }


  useEffect(fetchActor, []);
  useEffect(fetchActresses, []);

  return (
    /* creiamo un map per gli attori uomo dove ogni card contiene: foto/nome/annonascita/nazionalita'/Riconoscimenti/Biografia */
    <>
      <h1>ATTORI</h1>
      <div className="row">
        {cardActor.map(actor => (
          <div className="col-md-3 mb-3" key={actor.id}>
            <div className="card">
              <img src={actor.image} className="card-img-top" alt={actor.name} style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-header">
                {actor.name}
              </div>
              <div className="card-body">
                <p className="card-text"><strong>Anno nascita:</strong> {actor.birth_year}</p>
                <p className="card-text"><strong>Nazionalità:</strong> {actor.nationality}</p>
                <p className="card-text"><strong>Riconoscimenti:</strong> {actor.awards.join(' - ')}</p>
                <p className="card/text"><strong>Biongrafia:</strong>{actor.biography}</p>
              </div>
            </div>
          </div>
        ))}
        <h1>ATTRICI</h1>
        {CardActresses.map(actresses => (
          <div className="card">
            <img src={actresses.image} className="card-img-top" alt={actresses.name} style={{ height: '250px', objectFit: 'cover' }} />
            <div className="card-header">
              {actresses.name}
            </div>
            <div className="card-body">
              <p className="card-text"><strong>Anno nascita:</strong> {actresses.birth_year}</p>
              <p className="card-text"><strong>Nazionalità:</strong> {actresses.nationality}</p>
              <p className="card-text"><strong>Riconoscimenti:</strong> {actresses.awards.join(' - ')}</p>
              <p className="card-text"><strong>Biongrafia:</strong>{actresses.biography}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default App







/*  <div className="container">
        <div className="row">
          
          <div className="col">
            <div className="card">

            </div>
          </div>
        </div>
      </div> */