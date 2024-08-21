import {useState} from "react";
const InputOfURL=(props)=>{
    const [url, setUrl]=useState('');
    const urlChngee=(event)=>{
        setUrl(event.target.value);
    }
    const onUrlChange=(event)=>{
        event.preventDefault();
        props.urlChng(url);
    }
    return(
        <div>
            <form onSubmit={onUrlChange}>
                <input type="text" placeholder="Enter URL" onChange={urlChngee} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
export default  InputOfURL;