export default function handler(req, res) {
  const { type } = req.query
  const value = Math.floor(Math.random() * 100)
  res.status(200).json({ value })
}
