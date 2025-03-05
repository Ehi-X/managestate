# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


To-Do List Application
This is a simple to-do list application built with React and Vite. It allows you to add, edit, delete, and mark tasks as complete. Tasks are stored in your browser's localStorage so that your data persists between sessions.

Prerequisites
Node.js (v14 or higher recommended)
npm (comes with Node.js)



Follow these steps to run the application locally:


bash
npm install
Run the Development Server:

bash
npm run dev
This command starts the Vite development server. You should see a message indicating the local server URL (e.g., http://localhost:3000). Open the URL in your browser to view the app.

Additional Information
Folder Naming:
Ensure that the project folder name does not contain spaces or special characters to avoid URL normalization issues during the build process.

Project Structure:
The application is broken into smaller, modular components:

TaskForm: Manages the form for adding or editing tasks.
TaskItem: Displays an individual task.
TaskList: Renders the list of tasks.
App: The main component that holds state and integrates the other components.
Styling:
The application uses Tailwind CSS for styling. Make sure you have the necessary configurations if you plan to modify the styles.

LocalStorage:
Tasks are persisted using localStorage. To reset your task list, simply clear your browser's local storage or delete tasks through the app's interface.

Considerations
Vite Configuration:
If you encounter issues related to URL normalization (e.g., due to spaces in folder names), ensure your project directory is named appropriately without spaces.

