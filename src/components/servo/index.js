import { useState, useEffect } from 'react';
import './Servo.css'

const Servo = () => {
    const [responses, setResponses] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("responses")) {
            setResponses(localStorage.getItem("responses"));
        }
    }, []);

    const handleSubmit = () => {

    }

    return (
        <div id="servo">
            <i id="servo-icon" className="fa-solid fa-robot"></i>
            <h1>Servo</h1>
            <h2>The Robot Butler</h2>
            <p><span className='bold'>Servo Says:</span> How may I assist you today?</p>
            <div id="instructions">
                <p>Some examples of things you can ask Servo to do are:</p>
                <ul>
                    <li>
                        "Write a poem about a melting snowman. It should be include a pinecone."
                    </li>
                    <li>
                        "Classify the following animals as either mammal, reptile, or insect: turtle, ant, cow"
                    </li>
                    <li>
                        "Translate the following into French: I saw a mime riding a motorcycle!"
                    </li>
                </ul>
            </div>
            <form
                id="form"
                onSubmit={handleSubmit}
            >
                <label id="label">
                    <textarea id="textarea" />
                    <button id="button">Submit</button>
                </label>
            </form>
        </div>
    )
}

export default Servo;
