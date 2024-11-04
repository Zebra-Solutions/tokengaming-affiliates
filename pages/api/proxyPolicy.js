import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://demo.affilka.dev/api/v1/client/partner/policy', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'API-Key': process.env.API_KEY,   // Replace with your API key
            'API-Secret': process.env.API_SECRET  // Replace with your API secret
          },
      });
      res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching policy data:', error.response?.data || error.message, error.response?.status);
        res.status(error.response?.status || 500).json({
          error: 'Error fetching policy data',
          details: error.response?.data || error.message
        });
      }
      
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
