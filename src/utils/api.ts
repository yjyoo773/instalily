import axios from "axios";

// Function to send a message to the backend, which communicates with GPT
export const sendMessageToChatGPT = async (message: string) => {
  try {
    const response = await axios.post("http://localhost:8080/api/gpt", {
      message,
    });

    // Return the assistant's response from the backend
    return response.data.message;
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return "Sorry, something went wrong. Please try again later.";
  }
};
