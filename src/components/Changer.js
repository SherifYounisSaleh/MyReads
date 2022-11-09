import React from "react";


const Changer = ({ book, handleChange }) => {
    console.log(`callChangerBook ${book.id} - ${book.authors}`)
    Changer.propTypes = {
        bookObject: book.object,
        handleChangeFunc: handleChange.func
  }
  return (
    
          <select  onClick={(e) => handleChange(book, e.target.value)}>
            <option value="none" disabled>
              Move to...
            </option>
            
            <option value="wantToRead" >Want to Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
    
  );
};

export default React.memo(Changer) ;