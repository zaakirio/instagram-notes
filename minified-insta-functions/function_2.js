/*FB_PKG_DELIM*/

now_inl = (function () {
  var a = window.performance;
  return a && a.now && a.timing && a.timing.navigationStart
    ? function () {
        return a.now() + a.timing.navigationStart;
      }
    : function () {
        return new Date().getTime();
      };
})();
//# sourceURL=https://static.cdninstagram.com/rsrc.php/v3/y4/r/MmQo2XTouz7.js?_nc_x=Ij3Wp8lg5Kz
// In summary, this code defines a function now_inl that attempts to provide a high-precision timestamp using the performance API when available.
// If the necessary conditions are not met (i.e., the performance API is not available or lacks the required properties), 
// it falls back to a less precise method using new Date().getTime(). 
// This function is likely used for timing and performance measurement within the application.
