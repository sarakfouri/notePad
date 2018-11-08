import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';


class Note extends Component{
    constructor(props){
     super(props);
      this.noteContent = props.noteContent;
      this.noteId= props.noteId;
      
    }
    
   
  render(){
      return(
          <div className="note In">
              <p className="noteContent">{this.noteContent}</p> 
          </div>
      );
  }
}

Note.PropTypes = {
noteContent: PropTypes.string
}
 
export default Note;
