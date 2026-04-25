catch (err) {
  console.error("FULL ERROR:", err);
  res.status(500).json(err.message);
}
