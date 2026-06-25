# Post Upload App

A full-stack application that allows users to create and view posts with image uploads.

## Features

- Create posts
- Upload images
- View all posts
- Store data in MongoDB
- Cloud image storage using ImageKit

## Tech Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Image Storage

- ImageKit

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

Start backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend/project_frontend
npm install
npm run dev
```

## Screenshots

### Create Post Screen

![Create Post](./screenshots/create-post.png)

### Feed Page

![Feed Page](./screenshots/feed-page.png)

## Future Improvements

- User Authentication
- Like functionality
- Comments
- Delete Posts