import { useState } from "react";

function LiveInput(){
    const[text, setText] = useState("")
    return(
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Typesomething"/>
            <p>you typed : {text}</p>
        </div>
    )
}
export default LiveInput