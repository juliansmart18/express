const urls = require("../data/urls-data")

function create(req, res) {
    const { data: { href } = {} } = req.body;
    const id = urls.length + 1;
    const newUrl = {
      id,
      href
    };
    urls.push(newUrl);
    res.status(201).json({ data: newUrl });
  }


module.exports = {
    create
}