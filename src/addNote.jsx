import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faComment, faPlus, faPenNib, faCircleMinus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Addimage from "./Addimage";
//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

import { useState } from "react";

//  Get the order ID that the note will be added to from state
export default function Addnote() {
  const dispatch = useDispatch();
  const [addOrderNote, setAddOrdernote] = useState(true);
  const [orderNote, setOrderNotes] = useState([]);
  const [noteCount, setNoteCount] = useState(0)

  const handleAddNote = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const notetoadd = {
      note: data.order_note,
    };
    const y = orderNote;
    y.push(notetoadd);

    setOrderNotes(y);
    openAddNote();

    let count = noteCount
    count += 1
    setNoteCount(count)
   
  };

  // Remove the selected temporary note from the list before submitting.
  // Update the note count in order to show the submit button to add the notes to the order for later review
  // adding notes will also activate the complete button to add the tasks and notes for the order complete
  const handleRemoveNote = (noteToDelete) => {
    const removenote = orderNote.filter((note) => note !== noteToDelete);
    let count = noteCount
    count -= 1
    setNoteCount(count--)
    setOrderNotes(removenote);
  };

  // Open or close the option the add a note to the order or remove one from the order
  const openAddNote =() => {
   
    setAddOrdernote(!addOrderNote);
  };

  // submit all the notes related to this order to the database
  const handleSubmitAllNotes =(e) => {
    e.preventDefault()
    console.log("all notes")
  }

  return (
    <div>
     
      <span
        onClick={openAddNote}
        className="bg-orange-600 text-gray-50 p-1 rounded text-xs w-24"
      >
        
        <FontAwesomeIcon icon={faPlus}/>
      </span>

      {
        noteCount >= 1 ?  (<button onClick={ (e) => handleSubmitAllNotes(e)} className="absolute bottom-1 right-1 bg-blue-300 text-gray-600">Submit {noteCount} 
        
       {" "} <FontAwesomeIcon icon={faRightToBracket}/>
        </button>): (<p className="mt-5">Notes added will show here!</p>)
      }
      {addOrderNote ? (
        <div>
          <form onSubmit={ (e) => handleAddNote(e) }>
            <label htmlFor=""><FontAwesomeIcon icon={faPenNib}/> </label>
            <input type="text" name="order_note" />
            <button className="bg-green-900 text-gray-400 text-lg"> + </button>
          </form>
          <Addimage />
        </div>

      ) : (
        ""
      )}


{orderNote &&
        orderNote.map((value, key) => {
          return (
            <p key={key}>
            <FontAwesomeIcon icon={faComment}/> 
            {" "}{value.note}{" "}
              <button
                className="text-red-900"
                onClick={() => handleRemoveNote(value)}
              >{" "}
                 <FontAwesomeIcon icon={faCircleMinus}/>
              </button>
            </p>
          );
        })}
    </div>
  );
}
