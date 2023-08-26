/*FB_PKG_DELIM*/

var dataElement = document.getElementById("envjson");
if (dataElement != null) {
  var copyVariables = function (a) {
      for (var b in variables) a[b] = variables[b];
    },
    variables = JSON.parse(dataElement.textContent);
  window.requireLazy
    ? window.requireLazy(["Env"], copyVariables)
    : ((window.Env = window.Env || {}), copyVariables(window.Env));
}
//# sourceURL=https://static.cdninstagram.com/rsrc.php/v3/yL/r/dbgrMsnD18p.js?_nc_x=Ij3Wp8lg5Kz

// In summary, this code is primarily designed to read JSON data from an HTML element with the ID "envjson"
// and make that data available in the global JavaScript scope, either by extending an existing "Env" object 
// or by creating one if it doesn't already exist. This can be useful for configuring and sharing variables 
// and settings across different parts of a web application.
