import { notes } from "./dbase/Notes"
import { Link } from "react-router-dom"

function Routenotes() {
  return (
    <>
         <h1 className="mt-10 mb-5 font-semibold">Route notes:</h1>
        <ol>
       
        {notes.map((note,id) =>
            <li key={id}>
            <p className="font-semibold mb-3"><Link to="/">Order# {note.note_order_number}</Link> </p>
            <p className="text-gray-500 mb-5 text-sm">
              {note.note}
            </p>
          </li>
        
        )}
        </ol>
    </>
  )
}

export default Routenotes