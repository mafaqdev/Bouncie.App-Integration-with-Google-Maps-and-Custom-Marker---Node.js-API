const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let accessToken = '';

// Middleware to parse JSON responses
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // Use the cors middleware

// Function to get new access token
const fetchAccessToken = async () => {
  try {
    const response = await axios.post(process.env.TOKEN_URL, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: process.env.AUTH_CODE,
      redirect_uri: process.env.REDIRECT_URI
    });

    accessToken = response.data.access_token;
    console.log('New access token:', accessToken);
  } catch (error) {
    console.error('Error fetching access token:', error.message);
  }
};

// Function to fetch vehicle data
const fetchVehicleData = async () => {
  try {
    const response = await axios.get(process.env.VEHICLE_API, {
      headers: {
        'Authorization': accessToken,
        'Content-Type': 'application/json',
      },
    });

    console.log("Vehicle location:", response.data[0].stats.location);

    return response.data[0].stats.location; // Return the first vehicle's data
  } catch (error) {
    console.error('Error fetching vehicle data:', error.message);
    return null;
  }
};

// API endpoint to fetch vehicle data
app.get('/api/vehicle', async (req, res) => {
  // Fetch access token if it doesn't exist or expired
  if (!accessToken) {
    await fetchAccessToken();
  }

  const vehicle = await fetchVehicleData();
  if (vehicle) {
    res.json({
      latitude: vehicle.lat, // Adjust according to your data structure
      longitude: vehicle.lon, // Adjust according to your data structure
    });
  } else {
    res.status(500).json({ message: 'Error fetching vehicle data' });
  }
});

// Route to provide Google Maps API key securely
app.get('/api/google-maps-key', (req, res) => {
  res.json({ key: process.env.GOOGLE_API_KEY });
});

// Refresh access token every 1 minutes
setInterval(fetchAccessToken, 55 * 60 * 1000);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  fetchAccessToken(); // Fetch the token when the server starts
});