export default async function handler(req, res) {
  try {
    const currentTime = new Date();
    res.status(200).json({ time: currentTime });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}
