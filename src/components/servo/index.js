import { useState, useEffect } from 'react';
import './Servo.css'


const Servo = () => {
    const [responses, setResponses] = useState([]);
    const [query, setQuery] = useState({});
    const [errors, setErrors] = useState([]);
    const [prompt, setPrompt] = useState('');
    const apiKey = process.env.REACT_APP_OPENAI_SECRET;

    useEffect(() => {
        if (localStorage.getItem("responses")) {
            setResponses(JSON.parse(localStorage.getItem("responses")));
        }
    }, []);

    useEffect(() => {
        console.log(responses);
        if (responses.length) {
            localStorage.setItem("responses", JSON.stringify(responses));
        }
    }, [responses]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!query.prompt || !query.prompt.length) {
            setErrors(['Please enter a prompt.'])
        } else {
            const response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`
                },
                body: JSON.stringify(query)
            });
            console.log(response);
            if (response.ok) {
                const newResponse = await response.json();
                console.log(newResponse);
                const answer = [query.prompt, newResponse.choices[0].text];
                console.log(answer);
                setResponses([answer, ...responses]);
                setPrompt('');
            } else if (response.status < 500) {
                const data = await response.json();
                console.log(data);
                if (data.error) {
                    setErrors([data.error.message]);
                }
            } else {
                setErrors(['An error occured. Please try again.'])
            }
        }
    }

    const handleChange = (e) => {
        setQuery({
            prompt: e.target.value,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        });
        setPrompt(e.target.value);
        setErrors([]);
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
                    <textarea
                        id="textarea"
                        onChange={handleChange}
                        value={prompt}
                    />
                    <button id="button">Submit</button>
                </label>
            </form>
            <div id="errors">
                {errors.map((error, index) => (
                    <div className="error" key={`error-${index}`}>{error}</div>
                ))}
            </div>
            <div id="responses">
                {responses.map((response, index) => (
                    <div className="response-box" key={`response-${index}`}>
                        <div className="user-prompt">
                            <span className="bold">Prompt:</span> {response[0]}
                        </div>
                        <div className="servo-says">
                            <span className="bold">Servo Says:</span> {response[1]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Servo;
