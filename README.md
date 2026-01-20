# PromptCoach

**PromptCoach** is a comprehensive web application designed to help users master prompt engineering through hands-on practice. It allows you to write prompts, send them to LLMs, and receive instant evaluation, including quality scores, actionable feedback, and optimized rewrites. Learn by doing—no theory required!

## 🚀 Features

- **Prompt Evaluation**: Get instant feedback on your prompts with a quality score.
- **Actionable Insights**: detailed analysis of how to improve your prompt.
- **Better Prompt Generation**: Automatically receive a rewritten, optimized version of your prompt.
- **User Authentication**: Secure Login and Signup functionality.
- **Modern Tech Stack**: Built with React, Node.js, and PostgreSQL.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (via Vite)
- **Routing**: React Router DOM (v7)
- **Styling**: CSS / Styled Components (inferred)
- **Location**: `Views/FrontEnd`

### Backend
- **Framework**: Node.js with Express.js
- **Database ORM**: Drizzle ORM
- **Authentication**: Custom implementation (Controllers/Login, Signup)
- **API Structure**: RESTful API
- **Location**: Root directory

### Database
- **System**: PostgreSQL (v15)
- **Management**: Docker & Drizzle Kit

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for the database)
- [Git](https://git-scm.com/)

## ⚙️ Installation & Setup

Follow these steps to get the project running locally.

### 1. Clone the Repository
```bash
git clone https://github.com/yash2106-byte/PromptCoach.git
cd PromptCoach
```

### 2. Backend Setup
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Create a `.env` file in the root directory and add your database URL (and port if needed):
    ```env
    PORT=8000
    DATABASE_URL="postgresql://yash:mypassword@localhost:5433/postgres"
    ```
    *(Note: The database credentials above match the default configuration in `docker-compose.yml`)*

3.  Start the Database (using Docker):
    ```bash
    docker-compose up -d
    ```

4.  Push the Database Schema:
    ```bash
    npm run db:push
    ```

5.  Start the Backend Server:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:8000`.

### 3. Frontend Setup
1.  Navigate to the frontend directory:
    ```bash
    cd Views/FrontEnd
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the Frontend Development Server:
    ```bash
    npm run dev
    ```
    The application will typically be accessible at `http://localhost:5173`.

## 📜 Usage

1.  Open your browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
2.  **Sign Up** for a new account.
3.  **Log In** with your credentials.
4.  Navigate to the **Analyze** section to input your prompts and receive feedback.

## 🔮 Future Roadmap

We are actively working on expanding PromptCoach capabilities. Upcoming updates include:

*   **🛡️ Enhanced Security**: Implementing advanced authentication mechanisms (OAuth, JWT refinements) and data protection measures.
*   **🤖 Deep AI Integration**: Direct integration with multiple LLM providers (OpenAI, Anthropic, Google Gemini) for real-time response testing.
*   **📊 Advanced Analytics**: Detailed dashboards to track your prompt engineering improvement over time.
*   **Multi-LLM Support**: Compare how different models respond to the same prompt.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Engineering Roadmap
The development of PromptCoach is planned in structured phases, focusing on security, AI integration, and scalability.

## Phase 1: Security Hardening
Strengthen authentication and authorization flows
Improve password handling and validation logic
Secure API routes with proper middleware
Better management of environment variables and secrets
Input validation to prevent malformed or malicious requests

## Phase 2: AI Integration
Integrate AI models to generate responses for user-submitted prompts
AI-based evaluation of prompt quality
Smarter prompt rewrites using model feedback
Improve accuracy and usefulness of prompt scoring

## Phase 3: Multi-Model & Comparison Support
Test the same prompt across multiple LLMs
Compare outputs, scores, and feedback
Enable users to understand how prompts behave with different models

## Phase 4: Analytics & UX Improvements
Track user progress over time
Prompt performance history
Cleaner UI and improved user experience
Better error handling and system feedback

## 📄 License

This project is licensed under the ISC License.
