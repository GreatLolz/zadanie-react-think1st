# Zadanie React Think1st | Let's Workout

This is a simple web application that allows users to sign up for a workout session. It includes a form to collect personal information and workout details.

## Live Demo

[Live Demo](https://greatlolz.github.io/zadanie-react-think1st/) deployed via Github Pages

## Features

*   **Personal Information:** Collects first name, last name, email, and age.
*   **Photo Upload:** Allows users to upload a profile photo.
*   **Workout Date:** A date and time picker for scheduling a workout.
*   **Form Validation:** Includes basic form validation for all fields.
*   **Filtered Calendar:** The calendar blocks selection of Sundays and Polish national holidays.

## Getting Started

### Prerequisites

* **Node.js**: v22.19+

* **npm**: v10.2+

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/greatlolz/zadanie-react-think1st.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## Available Scripts

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run lint`

Lints the project files using ESLint.

### `npm run preview`

Serves the production build locally.

## Github Pages deployment

This application is configured to be automatically deployed to Github Pages using a Github Actions workflow.\
For the deployment to work properly, you need to configure your repository:

1.  Go to **Settings > Actions > General** and under "Workflow permissions" select **Read and write permissions** and save.
2.  Go to **Settings > Pages**. Under "Build and deployment", select **Deploy from a branch**. For the branch, select `gh-pages` and `/ (root)` folder, then save. If you don't see the `gh-pages` branch, you may need to run the workflow once by pushing to `main`.
3.  Go to **Settings > Secrets and variables > Actions**. Add a new repository secret with the name `VITE_NINJAS_API_KEY` and provide your API key.