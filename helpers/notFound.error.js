function notFoundfunc(res) {
  res.writeHead(404, {
    "Content-type": "application/json",
  });
  const resp = {
    status: 404,
    message: "Book not found",
  };
  res.end(JSON.stringify(resp));
}

module.exports = notFoundfunc;
