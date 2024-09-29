# Google Maps Vehicle Tracker

A simple Node.js application that integrates Google Maps to display vehicle locations in real-time. This project fetches vehicle data from a backend API and displays it on a map with markers.

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

- Display vehicle locations on Google Maps.
- Fetch vehicle data periodically.
- Custom marker icons.
- Responsive design for various screen sizes.

## Technologies Used

- Node.js
- Express.js
- Axios
- Google Maps JavaScript API
- dotenv for environment variables
- Bouncie API: Used to fetch real-time vehicle data.

About the Bouncie API
This project utilizes the Bouncie API to retrieve vehicle location data. You will need an active account and proper API access to use this feature.

## Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>

2. Navigate to the project directory:
cd <your-project-directory>

3. Install the dependencies:
npm install

4. Set up environment variables: Create a .env file in the root directory and add your environment variables. Example:
CLIENT_ID=<your_client_id>
CLIENT_SECRET=<your_client_secret>
TOKEN_URL=<your_token_url>
AUTH_CODE=<your_auth_code>
REDIRECT_URI=<your_redirect_uri>
VEHICLE_API=<your_vehicle_api_url>
GOOGLE_API_KEY=<your_google_maps_api_key>

Usage
1. Start the server:
node server.js

2. Open your browser and navigate to http://localhost:3000/api/vehicle to see the locations params

API Endpoints
- GET /api/vehicle: Fetches the current vehicle location from the backend API.
- GET /api/google-maps-key: Returns the Google Maps API key securely.

Environment Variables
Make sure to define the following variables in your .env file:
CLIENT_ID: Your OAuth client ID.
CLIENT_SECRET: Your OAuth client secret.
TOKEN_URL: The URL to fetch the access token.
AUTH_CODE: Your authorization code.
REDIRECT_URI: The redirect URI for your application.
VEHICLE_API: The URL to fetch vehicle data.
GOOGLE_API_KEY: Your Google Maps API key.

Contributing
Contributions are welcome! Please create a pull request or submit an issue for any improvements or suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
