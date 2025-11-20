const jFLocalTextToSpeech = ({ inText }) => {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    utterance.text = inText;

    // Optional: Configure speech parameters
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1;   // 0.1 to 10
    utterance.pitch = 1;  // 0 to 2

    // Optional: Select a specific voice
    // You would typically populate a dropdown with available voices first.
    // Example:
    // const voices = window.speechSynthesis.getVoices();
    // utterance.voice = voices[0]; // Select the first available voice

    // Use the SpeechSynthesis.speak() method to trigger speech synthesis
    window.speechSynthesis.speak(utterance);
};

const myButton = document.getElementById('PlayButtonId');

// Add a click event listener
myButton.addEventListener('click', () => {
    jFLocalTextToSpeech({ inText: "Tomato rupees 60" });
});