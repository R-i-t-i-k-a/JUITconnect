# JuitConnect - Online Community Platform

JuitConnect is an ongoing online community platform designed to facilitate communication and collaboration among users. It incorporates features like user authentication, Q&A discussions, and user profiles. This project is a collaborative effort involving three team members.

## Technologies Used

- **Frontend:** HTML, CSS, EJS (Embedded JavaScript), Axios
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** Express-session
- **External API Integration:** Axios
- **Web Scraping (Login):** Juit Webkiosk API

## Project Structure

- `models/`: Contains Mongoose models for User, Question (Ques), and Answer (Ans).
- `public/`: Static files (CSS stylesheets, etc.).
- `views/`: EJS templates for rendering HTML pages.
- `server.js`: Main server file with route handling and database setup.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/JuitConnect.git
cd JuitConnect
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```
or
```bash
nodemon app.js
```


4. Open your web browser and navigate to `http://localhost:3000`

## Features

1. **User Authentication:**
   - Users can log in using their JUIT Webkiosk credentials.
   - New users are automatically registered upon successful login.

2. **Pages:**
   - `home`, `about`, `contactus`: Accessible only when authenticated.
   - `discover`: Displays questions posted by users.
   - `profile`, `teams`: User-specific and team-related pages.
   - `ask`: Allows users to post questions.
   - `ans/:quesId`: Displays answers related to a specific question.

3. **Q&A Functionality:**
   - Users can ask questions and provide answers.

4. **Integration with External API:**
   - Uses JUIT Webkiosk API for user login.

5. **Web Scraping:**
   - Retrieves login details from the JUIT Webkiosk website.

## Contributing

This project is ongoing and actively seeking contributions. It requires improvement in various areas. If you'd like to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

## Acknowledgments

- Special thanks to the developers of Express, Mongoose, Axios, and other technologies used in this project.

## Team Members

- Ritika ((https://www.github.com/R-i-t-i-k-a))
- Sanskriti Priya ((https://www.github.com/sanskriti-15))
- Shruti Shree ((https://www.github.com/shrutishree15))

