const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const mobileCheck = function(req) {
  let isMobile = mobileRegex.test(req.headers['user-agent']);
  return isMobile;
}

function redirectMiddleware(req, res, next) {
  if (!mobileCheck(req)) {
    res.redirect('/go-to-mobile');
    return
  } else {
    next();
  }
}

module.exports = redirectMiddleware;