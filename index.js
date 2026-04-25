catch (err) {
  console.error("FULL ERROR:", err);
  res.status(500).json({
    message: err.message,
    code: err.code,
    meta: err.meta
  });
}
