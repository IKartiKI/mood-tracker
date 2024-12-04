# mood-tracker

A simple Mood Tracker app that allows users to track their daily mood and receive AI-generated insights using the ChatGPT model via RapidAPI.

## Features
- Track your daily mood on a scale of 1 to 5.
- Provide a brief text description about your mood.
- Receive AI-generated insights and suggestions based on your mood.

## Technologies Used
- Frontend: React Native, TypeScript, Expo
- Backend: Node.js, Express, Axios, RapidAPI (for ChatGPT integration)
- Database: None (this is a simple prototype with no persistence)
- AI API: ChatGPT via RapidAPI

## Installation
1. Step 1: Clone the Repository
 ```
git clone https://github.com/|KartiK|/mood-tracker.git
cd mood-tracker-app
```
### Step 2: Backend Setup
1. Navigate to the backend folder:
```
cd backend
```
2. Install the required dependencies:

```
npm install
```
3. Create a .env file in the backend directory and add your RapidAPI key:

```
RAPIDAPI_KEY=your_rapidapi_key
```
4. Start the backend server:

```
node server.js
```
The backend should now be running at http://localhost:3001.

### Step 3: Frontend Setup
1. Navigate to the frontend folder:

```
cd ../frontend
```
2. Install the required dependencies:

```
npm install
```

3. Start the frontend React Native app using Expo:

```
npm start
```
