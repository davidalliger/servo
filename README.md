# Servo: The Robot Butler

Servo is a robot butler that can respond to text prompts. A user can enter a prompt into the text field and hit submit to send a request to Servo. The user's prompts and Servo's responses are displayed list-style underneath.

## Implementation

Servo utilizes the public API for OpenAI's powerful AI model, GPT-3. The client sent a POST request to the API, and the API return's Servo's response. The application was built using the React frontend library. The App component contains a form with a controlled input, which updates certain stateful variables. When the form is submitted, a fetch request with a method of "POST" is sent to the external API, and the response gets recorded and displayed below.

![servo-3](https://user-images.githubusercontent.com/88861592/167978396-caedcbed-4443-4f8a-aa2d-516b90918890.PNG)

![servo-2](https://user-images.githubusercontent.com/88861592/167978424-cc92ec25-ad7d-418e-954c-c84354c0231d.PNG)

![servo-1](https://user-images.githubusercontent.com/88861592/167978452-30b5c660-965a-467f-ade5-d9d6d0734159.PNG)

## Screenshots

![servo-4](https://user-images.githubusercontent.com/88861592/167979044-1ca70254-fa8a-4d94-b299-316f97520111.PNG)

![servo-5](https://user-images.githubusercontent.com/88861592/167979084-58165b5f-fe23-4c86-96b7-faede5bf36a1.PNG)

## Possible Future Features

In the future, it would be neat to create a backend for the application with a database and user authentication. That way, people could sign up for an account and log in whenever they want to view their exchanges with Servo.
