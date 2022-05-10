import './Servo.css'

const Servo = () => {
    if (localStorage.getItem(""))
    return (
        <>
            <i class="fa-solid fa-robot"></i>
            <h1>Servo</h1>
            <h2>The Robot Butler</h2>
            <p><span>Servo Says:</span> How may I assist you today?</p>
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
            <form>
                <label>
                    <textarea />
                    <button>Submit</button>
                </label>
            </form>
        </>
    )
}

export default Servo;
