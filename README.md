# Setup - root folder dependencies

- npm init
- npm install express dotenv mongoose colors morgan
- npm install -D nodemon concurrently
- In scripts package.json configure concurrently using npm run dev:

  "start": "node server",
  "server": "nodemon server",
  "client": "npm start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\" "

# Frontend folder

- Add proxy to end of package.json

  "proxy": "http://localhost:5000"

- npm install axios
