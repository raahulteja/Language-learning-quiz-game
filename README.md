# Language Learning Quiz Game

Welcome to the Language Learning Quiz Game project! This project is a quiz game designed to help users improve their language skills. The project is divided into two components: a decoupled frontend and a backend. The frontend is built entirely using HTML, CSS, and JavaScript, while the backend is developed in Django with the assistance of Django Rest Framework.

## Getting Started

Follow these steps to set up and run the project locally:

### Backend

1. Navigate to the `backend` directory.

```bash
cd backend
```

2. Install the required dependencies.

```bash
pip install -r requirements.txt
```

3. Apply migrations.

```bash
python manage.py migrate
```

4. Run the Django development server.

```bash
python manage.py runserver
```

The backend server will be running at `http://localhost:8000/`.

### Frontend

1. Navigate to the `frontend` directory.

```bash
cd frontend
```

2. Launch the frontend using a live server, for example, using the Live Server extension in Visual Studio Code.

The frontend will be accessible at `http://127.0.0.1:5500/` or another port provided by the live server.

## API Endpoints

The backend provides the following API endpoints:

- **Register User:**
  - Endpoint: `/register/`
  - Method: POST
  - Description: Register a new user.

- **Submission:**
  - Endpoint: `/submission/`
  - Method: POST
  - Description: Submit user responses.

- **Score:**
  - Endpoint: `/score/`
  - Method: GET
  - Description: Get the user's score.

- **Verify Token:**
  - Endpoint: `/verifytoken/`
  - Method: POST
  - Description: Verify the authenticity of a token.

- **Leaderboard:**
  - Endpoint: `/leaderboard/`
  - Method: GET
  - Description: Retrieve the leaderboard.

- **Generate Access Token and Refresh Token:**
  - Endpoint: `/token/`
  - Method: POST
  - Description: Generate access and refresh tokens using Simple JWT.

## Note

Ensure that you start the backend server before running the frontend to fetch content dynamically from the backend.

Feel free to explore, contribute, and enjoy learning with the Language Learning Quiz Game! If you encounter any issues or have suggestions, please open an issue on GitHub.
