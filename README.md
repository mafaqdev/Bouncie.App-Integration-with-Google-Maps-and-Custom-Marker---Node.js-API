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

1. Clone the repository:
   git clone <your-repository-url>

2. Navigate to the project directory:
   cd <your-project-directory>

3. Install the dependencies:
   npm install

4. Set up environment variables: Create a `.env` file in the root directory and add your environment variables. Example:
   CLIENT_ID=<your_client_id>
   CLIENT_SECRET=<your_client_secret>
   TOKEN_URL=<your_token_url>
   AUTH_CODE=<your_auth_code>
   REDIRECT_URI=<your_redirect_uri>
   VEHICLE_API=<your_vehicle_api_url>
   GOOGLE_API_KEY=<your_google_maps_api_key>

## Usage

1. Start the server:
   node server.js

2. Open your browser and navigate to `http://localhost:3000/api/vehicle` to see the vehicle location parameters.

## API Endpoints

- GET /api/vehicle: Fetches the current vehicle location from the Bouncie.app backend API.
- GET /api/google-maps-key: Returns the Google Maps API key securely.

## Environment Variables

Make sure to define the following variables in your `.env` file:

- `CLIENT_ID`: Your OAuth client ID.
- `CLIENT_SECRET`: Your OAuth client secret.
- `TOKEN_URL`: The URL to fetch the access token.
- `AUTH_CODE`: Your authorization code.
- `REDIRECT_URI`: The redirect URI for your application.
- `VEHICLE_API`: The URL to fetch vehicle data from the Bouncie.app API.
- `GOOGLE_API_KEY`: Your Google Maps API key.

## Contributing

Contributions are welcome! Please create a pull request or submit an issue for any improvements or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
