import { useState } from "react"
import "./resources.scss"

export default function Resources() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="resources" id="resources">
            <div className="left">
                <h1>Contact information</h1>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>    
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>    
            </div> 
        </div>
    )
}