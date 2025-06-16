// This file configures Axios to use a base URL depending on the environment.
// It sets the base URL to 'http://localhost:5000' in development mode
// and to the root path '/' in production mode.
// It is used to make HTTP requests to the backend server.
// Importing axios library to configure HTTP requests
// Importing axios library to configure HTTP requests
// Importing axios library to configure HTTP requests
import axios from 'axios';

axios.defaults.baseURL =

  process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';

  // 