import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>   {
    let newText = text.toUpperCase();
    setText(newText)
    }
    const handleLoClick = ()=>   {
    let newText = text.toLowerCase();
    setText(newText)
    }
    const handleClearClick = ()=>   {
    let newText = "";
    setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className='form-control' value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>

  )
}
