/*FB_PKG_DELIM*/

(function (a) {
  function b(b) {
    if (!window.openDatabase) return;
    b.I_AM_INCOGNITO_AND_I_REALLY_NEED_WEBSQL = function (a, b, c, d) {
      return window.openDatabase(a, b, c, d);
    };
    window.openDatabase = function () {
      throw new Error();
    };
  }
  b(a);
})(this);
//# sourceURL=https://static.cdninstagram.com/rsrc.php/v3/yR/r/-pVC0PF44dY.js?_nc_x=Ij3Wp8lg5Kz
// This code is designed to make sure that WebSQL cannot be used in "incognito" or private browsing mode. 
// It does this by wrapping the original window.openDatabase function and throwing an error when it's called. 
// However, it provides an alternative way to create WebSQL databases by defining the I_AM_INCOGNITO_AND_I_REALLY_NEED_WEBSQL function, which can be used in situations where WebSQL is needed despite being in "incognito" mode. 
// This modification appears to be related to browser security and privacy considerations.
