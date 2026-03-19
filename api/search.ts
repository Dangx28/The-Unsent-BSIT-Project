import type {VercelRequest, VercelResponse} from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const {query, token} = req.body;
    
    const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}