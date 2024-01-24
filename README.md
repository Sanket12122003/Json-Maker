# JSON Maker

## Overview

JSON Maker is a React application built with Chakra UI that allows users to create dynamic forms by pasting a UI schema. The UI schema, provided as a JSON array, contains all the necessary information to generate and preview forms dynamically. The application's single-screen interface is split into two equal sections: a JSON editor on the left for pasting the UI schema and a live preview of the rendered form on the right.

## Live Demo

Explore the live demo: [JSON Maker Live](https://frontend-jsonmaker.vercel.app/)

## Example JSON Schema

Try out an example UI schema: [Example JSON Schema](https://drive.google.com/file/d/1RUU_ueF9BbQRLReuX88w8PWe2jsz3Z3C/view?usp=sharing)

## Project Structure

The project is structured as follows:

- **`src/`**: Contains the source code.
  - **`components/`**: React components.
  - **`JsonEditor.js`**: Component for the JSON editor.
  - **`FormPreview.js`**: Component for live form preview.
  - **`App.js`**: Main application component.
- **`public/`**: Public assets.
- **`package.json`**: Project dependencies and scripts.
- **`README.md`**: Project documentation.

## Tech Stack

- **Frontend**: React, JavaScript, Chakra UI

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Priyanshu9898/Frontend-Assignment.git
    ```

2. **Install dependencies:**

    ```bash
    cd Frontend-Assignment
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Building for Production

To create a production build, run:

```bash
npm run build
