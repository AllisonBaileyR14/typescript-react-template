import axios from 'axios';

// Create an instance of Axios with default configurations
const api = axios.create({
    baseURL: '/api', // This assumes that you have set up a proxy in your Vite configuration
    timeout: 10000, // Request timeout in milliseconds
});

// Example API call to fetch a message from the backend
export const fetchMessage = async (): Promise<string> => {
    try {
        const response = await api.get('/hello');
        return response.data.message;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error fetching message:', error.response?.data);
            throw new Error(error.response?.data?.message || 'Failed to fetch message');
        }
        throw error;
    }
};

// Other API calls can be added here
export default api;
