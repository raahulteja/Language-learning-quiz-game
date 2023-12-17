# Language Learning Quiz Game

Welcome to the Language Learning Quiz Game project! This project is a quiz game designed to help users improve their language skills. The project is divided into two components: a decoupled frontend and a backend. The frontend is built entirely using HTML, CSS, and JavaScript, while the backend is developed in Django with the assistance of Django Rest Framework.

# Language Learning Quiz Game

Welcome to the Language Learning Quiz Game project! ...

![Screenshot 1](https://github.com/raahulteja/Language-learning-quiz-game/blob/main/2023-12-17%20(1).png)

![Screenshot 2](https://github.com/raahulteja/Language-learning-quiz-game/blob/main/2023-12-17%20(3).png)

![Screenshot 3](https://github.com/raahulteja/Language-learning-quiz-game/blob/main/2023-12-17%20(4).png)

![Screenshot 4](https://github.com/raahulteja/Language-learning-quiz-game/blob/main/2023-12-17%20(5).png)

## Getting Started

Follow these steps to set up and run the project locally:

### Backend

1. Navigate to the `backend` directory.

```bash
cd quizbackendapi
```

2. Install django and django restframework libraries

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
  - Method: POST
  - Description: Post the user's score.

- **Verify Token:**
  - Endpoint: `/verifytoken/`
  - Method: POST
  - Description: Verify the authenticity of a token.

- **Leaderboard:**
  - Endpoint: `/leaderboard/`
  - Method: POST
  - Description: Retrieve the leaderboard.

- **Generate Access Token and Refresh Token:**
  - Endpoint: `/token/`
  - Method: POST
  - Description: Generate access and refresh tokens using Simple JWT.

## Note

Ensure that you start the backend server before running the frontend to fetch content dynamically from the backend.

Feel free to explore, contribute, and enjoy learning with the Language Learning Quiz Game! If you encounter any issues or have suggestions, please open an issue on GitHub.

