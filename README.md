# Frontend - Groupon Personal Assistant

This is the frontend of the Groupon Personal Assistant, built with **React**, **TypeScript**, and **Material-UI**. It allows users to interact with a chatbox that can provide restaurant recommendations, activity suggestions, billing help, and account management using the OpenAI API.

## Table of Contents
- [Installation](#installation)
- [Scripts](#scripts)
- [Features](#features)

## Installation

1. Clone the repository:

   ```git clone <repository-url>```

2. Install dependencies using Yarn:

   ```yarn install```

3. Create a .env file in the project root  and add the necessary environment variables:

   ```REACT_APP_BACKEND_URL=http://localhost:5000```

## Scripts 
- Start the server in development mode:
    ```yarn dev```
- Build for production:
    ```yarn start```

## Features
- **Responsive Chatbox**: A floating chatbox at the bottom right that supports opening, minimizing, and closing.
- **Dynamic Interactions**: Users can interact with the chatbox to get recommendations, account help, and more.
- **Integration with OpenAI**: Chatbox communicates with the backend, which in turn interacts with OpenAI's GPT API.



