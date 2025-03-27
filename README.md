# Advice, Fact, and Joke Generator

This project is a web application built with React.js for the frontend and Django for the backend. It implements session-based authentication to provide personalized content to users.

## Features:

- **_Session-Based Authentication_**: Secure login system using Django's authentication framework.

- **_API Integration_**: Requests data from external APIs to fetch and display advice, facts, and jokes.

- **_Responsive Design_**: Built with React.js to ensure a smooth and interactive user experience across devices.


## Technologies Used:

- **_Frontend_**: React.js, Axios

- **_Backend_**: Django, Django REST Framework

- **_Authentication_**: Django Authentication System

- **_External APIs_**: Integrated APIs for advice, facts, and jokes

  ![API call](https://github.com/treyweldon/Advice-Fact-or-Joke/blob/main/screenshots/afj.png)
 ![Home Page](https://github.com/treyweldon/Advice-Fact-or-Joke/blob/main/screenshots/afj2.png) 

### How to Use:
1. Clone the repository: `git clone https://github.com/treyweldon/Advice-Fact-or-Joke.git`
2. Set up the backend:
  - Navigate to the backend directory: `cd backend`
  - Install dependencies: `pip install -r requirements.txt`
  - Run migrations: `python manage.py migrate`
  - Start the Django development server: `python manage.py runserver`
3. Set up the frontend:
  - Navigate to the frontend directory: `cd frontend`
  - Install dependencies: `npm install`
  - Start the React development server: `npm start`
  - Open your browser and visit: `http://localhost:3000/`

### Contributing:
Contributions are welcome! Please feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License:
This project is licensed under the MIT License - see the LICENSE file for details.
