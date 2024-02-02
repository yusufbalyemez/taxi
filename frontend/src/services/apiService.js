// APIService.js
// A simple API service to interact with the Node.js backend.

const API_BASE_URL = 'http://localhost:6000'; // Replace with your actual base URL

const APIService = {
  // User API calls
  registerUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  loginUser: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  },

  getUserProfile: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/profile/${userId}`);
    return await response.json();
  },

  updateUserProfile: async (userId, userData) => {
    const response = await fetch(`${API_BASE_URL}/users/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },

  deleteUser: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    });
    return await response.json();
  },

  // Booking API calls
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    return await response.json();
  },

  getAllBookings: async () => {
    const response = await fetch(`${API_BASE_URL}/bookings`);
    return await response.json();
  },

  getBookingById: async (bookingId) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
    return await response.json();
  },

  updateBooking: async (bookingId, bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    return await response.json();
  },

  deleteBooking: async (bookingId) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`, {
      method: 'DELETE',
    });
    return await response.json();
  },
};

export default APIService;
