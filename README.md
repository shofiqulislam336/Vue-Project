


# Vue Project


## Project Setup

Clone the repository:

```bash
git clone https://github.com/shofiqulislam336/Vue-Project.git
```

Go to the project directory:

```bash
cd Vue-Project
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```



A simple Settings Page built with Vue 3 and Tailwind CSS.

## Features

- General Settings
- Notifications Settings
- Privacy Settings
- Dynamic tab switching
- Smooth transition animation
- Form inputs and checkboxes
- Save settings to Local Storage

## Built With

- Vue 3
- JavaScript
- TypeScript
- Tailwind CSS

## About the Project

-I used TypeScript to build this project so I could define variable types and catch errors before running the code.

-I used defineProps and defineEmits so that the TabButton component receives tab and currentTab as props and determines
 whether it is active. When the button is clicked, it emits an event to notify the parent component, which then updates currentTab.
 
-I used separate components for different functionalities to keep the code organized.

-I used Vue's Transition component to switch between tabs smoothly with fade animations.

-I used localStorage to save the project data so it remains available even after refreshing the page. I also used JSON.stringify() to 
 convert objects into strings so they can be stored in localStorage.
 
-I used Vue's Teleport to display messages at the top of the page. I used a composable to make the message functionality reusable across 
 components, and setTimeout() to automatically remove the message after 4 seconds.


## Author

Shofiqul Islam






