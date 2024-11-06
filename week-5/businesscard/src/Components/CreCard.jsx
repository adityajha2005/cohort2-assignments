import { useState } from "react";

export function CreateCard(){
    const[title,setTitle]=useState("Title");
    const[description,setDescription]=useState("Description");
    const[socialurl,setSocialurl]=useState("Social URL");
    const[interest,setInterest]=useState("Interest");
    return <div>
        <input style={{}}
        type="text"
        placeholder="Name">
        </input>
        <br/> <br/>
        <input style={{}}
        text="text"
        placeholder="Short Description">
        </input>
        <br/><br/>
        <input style={{}}
        type="text"
        placeholder="Interest"
        ></input> <br/><br/>
        <button style={{}}>Linkedin</button>
        {/* <button style={{}}>Twitter</button> */}
    </div>
}