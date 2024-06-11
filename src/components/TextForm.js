import React,{useState} from "react";
//  import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","Success")
    }

    const handleOnChange = (event) =>{
      // console.log("On change was clicked" + text);
      setText(event.target.value);
    }

    const handleLoClick = () => {
      // console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","Success")
      }

      const handleClearClick = () =>{
        // console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText);
       
      }
      const handleExtraSpaces=()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "));
          props.showAlert("Extra spaces removed!","Success")
      }

      const handleCopy=()=>{
        // console.log("Copy was clicked");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard","Success")


      }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"  style={{backgroundColor:props.mode==='dark'? '#212529' : 'white', color:props.mode==='light'? 'black' : 'white'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handleClearClick} style={{backgroundColor:props.mode==='dark'? '#f5e3e3' : '#212529', color:props.mode==='light'?'white':'black'}}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'? 'white' : 'black'}}>
      <h3>Your text Summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} Words and {text.length} Characters.</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read.</p>
      
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
