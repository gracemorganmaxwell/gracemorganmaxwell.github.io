// Define the interaction tree
const interactionTree = {
    "root": {
        "message": "Hi there! I'm Clippy, your assistant. How can I help you today?",
        "responses": {
            "about": "I'm Gracie, a developer passionate about creating engaging and nostalgic web experiences.",
            "projects": "Check out my projects section to see what I've been working on!",
            "contact": "Feel free to reach out through the contact form in the contact section.",
            "default": "I'm not sure I understand. Could you please rephrase?"
        }
    },
    "about": {
        "message": "I'm Gracie, a developer passionate about creating engaging and nostalgic web experiences.",
        "responses": {
            "projects": "Check out my projects section to see what I've been working on!",
            "contact": "Feel free to reach out through the contact form in the contact section.",
            "default": "Is there anything else you'd like to know?"
        }
    },
    // Add more nodes as needed
};

// Current node in the interaction
let currentNode = "root";

function handleUserInput(input, agent) {
    if (!input) {
        agent.speak("Please ask a question to get started!");
        return;
    }

    input = input.toLowerCase();
    let node = interactionTree[currentNode];
    let response = node.responses[input] || node.responses["default"];

    agent.speak(response);

    // Update current node based on input
    if (interactionTree[input]) {
        currentNode = input;
    } else {
        currentNode = "root"; // Reset to root for unrecognized inputs
    }

    // Continue the conversation
    setTimeout(() => {
        let moreInput = prompt("Do you have another question?");
        handleUserInput(moreInput, agent);
    }, 2000);
}

clippy.load("Clippy", function (agent) {
    agent.show();
    agent.speak("Welcome to Gracie's portfolio!");

    // Show chat interface
    document.getElementById('clippy-chat').style.display = 'block';

    const sendButton = document.getElementById('clippy-send');
    const inputField = document.getElementById('clippy-input');
    const messagesDiv = document.getElementById('clippy-messages');

    sendButton.addEventListener('click', () => {
        const userInput = inputField.value;
        if (userInput.trim() === "") return;

        // Display user message
        const userMsg = document.createElement('p');
        userMsg.textContent = `You: ${userInput}`;
        messagesDiv.appendChild(userMsg);

        // Handle response
        handleUserInput(userInput, agent);

        // Clear input field
        inputField.value = "";
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});