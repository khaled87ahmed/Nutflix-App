# Nutflix MovieWebApp

## Overview

Nutflix is a movie web application built using React, Bootstrap, React-Redux, and Redux Toolkit. This application allows users to browse and discover movies and TV shows. To access movie data, Nutflix uses the TMDb (The Movie Database) API, and to maintain security and flexibility, the API key is stored in a `.env` file as `VITE_APP_TMDB_API_KEY`. This README provides instructions on how to set up and run the Nutflix MovieWebApp locally.

## Prerequisites

Before you can run the Nutflix MovieWebApp, you need to ensure you have the following prerequisites installed on your system:

- Node.js: Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
- npm: npm is bundled with Node.js, so you don't need to install it separately.

## Installation

1. Clone the Nutflix MovieWebApp repository to your local machine using the following command:

   ```shell
   git clone https://github.com/khaled87ahmed/Nutflix-App.git
   ```

2. Change into the project directory:

```shell
cd nutflix
```

## Install the required npm packages by running:

```shell
npm install
```

## Configuration

To securely store the TMDb API key, create a `.env` file in the root directory of the project and add your API key like this:

```env
VITE_APP_TMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual TMDb API key.

## Running the Application

To start the Nutflix MovieWebApp locally, follow these steps:

1. In the project directory, run the following command:

```shell
npm run dev
```

This command starts the development server and the application will be accessible at http://localhost:5173/.

Open your web browser and navigate to http://localhost:5173/ to access the Nutflix MovieWebApp.

## Usage

- Use the search bar to look for movies and TV shows.

- Click on a movie or TV show to view more details, including the plot, release date, and rating.

- To add a movie or TV show to your favorites list, look for the "Add to Favorites" button on the movie or TV show details page and click it. This will save the selected item to your favorites.

- To view your favorites list, navigate to the "Favorites" section of the application. Here, you can see all the items you've added to your favorites list.

- Enjoy exploring and discovering new movies and TV shows while keeping track of your favorites!

## Contact

If you have any questions or need assistance, please feel free to contact us at khaledahmed872003@gmail.com.

Thank you for using Nutflix MovieWebApp! Enjoy exploring movies and TV shows.

## Overview

[Download Example PDF](https://github.com/khaled87ahmed/Nutflix-App/blob/main/iti-final-project.pdf)

