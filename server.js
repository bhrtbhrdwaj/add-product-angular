function requireHTTPS(req, res, next) {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const appExpress = express();
appExpress.use(requireHTTPS);

appExpress.use(express.static("./dist/add-product-angular"));

appExpress.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "dist/add-product-angular/"}
  );
  });

  appExpress.listen(process.env.PORT || 8080);