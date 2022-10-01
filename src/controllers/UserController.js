exports.index = function (req, res) {
  res.send("forum index");
};


exports.store = function (req, res) {
  res.send("create forum");
};

exports.show = function (req, res) {
  res.send("show forum " + req.params.forum);
};



exports.update = function (req, res) {
  res.send("update forum " + req.params.forum);
};

exports.destroy = function (req, res) {
  res.send("destroy forum " + req.params.forum);
};
