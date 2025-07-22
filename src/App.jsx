import { useState, useEffect } from "react";
import AllActor from "./assets/AllActor";
import Actor from "./Actor";
import Actresses from "./assets/Actresses";


const urlActor = "https://lanciweb.github.io/demo/api/actors/";
const urlActresses = "https://lanciweb.github.io/demo/api/actresses/";

function App() {
  const [cardActor, setCardActor] = useState([]);
  const [cardActresses, setCardActresses] = useState([]);

  useEffect(() => {
    fetch(urlActor)
      .then((res) => res.json())
      .then(setCardActor);
    fetch(urlActresses)
      .then((res) => res.json())
      .then(setCardActresses);
  }, []);

  const allActor = [...cardActor, ...cardActresses];

  return (
    <>
      <h1 className="text-center">Attori e Attrici</h1>
      {/* Lista unica */}
      <AllActor allActor={allActor} />
      <h1>ATTORI</h1>
      <Actor cardActor={cardActor} />
      <h1>ATTRICI</h1>
      <Actresses cardActresses={cardActresses} />
    </>
  );
}
export default App;