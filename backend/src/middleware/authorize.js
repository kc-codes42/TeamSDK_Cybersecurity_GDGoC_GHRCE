function authorize(requiredRole) {
  return (req, res, next) => {
    const role = req.user?.role;

    if (!role || role !== requiredRole) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
}

module.exports = authorize;
