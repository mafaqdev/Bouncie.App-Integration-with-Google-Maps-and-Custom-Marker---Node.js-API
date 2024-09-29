# Bouncie.app Vehicle Tracker with Google Maps

A Node.js application that integrates the Bouncie.app vehicle tracking service to display real-time vehicle locations on Google Maps. This project fetches vehicle data from the Bouncie.app API, utilizes Node.js to create a secure backend API, and displays the data on a map with custom markers.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display real-time vehicle locations using data from the Bouncie.app API.
- Fetch vehicle data periodically from the backend.
- Custom marker icons for enhanced visibility.
- Responsive design that adapts to various screen sizes.

## Technologies Used

- Node.js
- Express.js
- Axios
- Bouncie.app API for vehicle data
- Google Maps JavaScript API
- dotenv for managing environment variables

## Installation

1. Log in to the Bouncie.app Developer Portal: This is the first step. From here, create an application to obtain the necessary credentials such as `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI`, and `AUTH_CODE`.

2. Clone the repository:
   git clone <your-repository-url>

3. Navigate to the project directory:
   cd <your-project-directory>

4. Install the dependencies:
   npm install

5. Set up environment variables: Create a `.env` file in the root directory and add your environment variables. Example:
   CLIENT_ID=<your_client_id>
   CLIENT_SECRET=<your_client_secret>
   TOKEN_URL=<your_token_url>
   AUTH_CODE=<your_auth_code>
   REDIRECT_URI=<your_redirect_uri>
   VEHICLE_API=<your_vehicle_api_url>
   GOOGLE_API_KEY=<your_google_maps_api_key>

   To obtain the `AUTH_CODE`, follow these steps:

   1. In your browser, navigate to the following URL (replace `my-app` with your actual client ID and `http://www.example.com/` with your redirect URI):
      https://auth.bouncie.com/dialog/authorize?response_type=code&client_id=my-app&redirect_uri=http://www.example.com/

   2. Sign in to Bouncie.app when prompted. After signing in, you will be redirected to your specified redirect URI, and you can retrieve the `AUTH_CODE` from the URL after `//www.example.com/`.

## Usage

1. Start the server:
   node server.js

2. Open your browser and navigate to `http://localhost:3000/api/vehicle` to see the vehicle location parameters.

3. Open the `index.html` file in your browser to visualize the Google Map with the vehicle locations fetched from the Bouncie.app API.

## API Endpoints

- GET /api/vehicle: Fetches the current vehicle location from the Bouncie.app backend API.
- GET /api/google-maps-key: Returns the Google Maps API key securely.

## Environment Variables

Make sure to define the following variables in your `.env` file:

- CLIENT_ID: Your OAuth client ID.
- CLIENT_SECRET: Your OAuth client secret.
- TOKEN_URL: The URL to fetch the access token.
- AUTH_CODE: Your authorization code (obtained as described above).
- REDIRECT_URI: The redirect URI for your application.
- VEHICLE_API: The URL to fetch vehicle data from the Bouncie.app API.
- GOOGLE_API_KEY: Your Google Maps API key.

## Contributing

Contributions are welcome! Please create a pull request or submit an issue for any improvements or suggestions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
