/*FB_PKG_DELIM*/

function parentIsNotHeadNorBody(a) {
  return a.parentElement !== document.body && a.parentElement !== document.head;
}
function isTagSupported(a) {
  return (
    a.nodeName === "SCRIPT" ||
    (a.nodeName === "LINK" &&
      ((a = getNodeDataSet(a)) == null ? void 0 : a.asyncCss))
  );
}
function getNodeDataSet(a) {
  return !(a.dataset instanceof window.DOMStringMap) ? null : a.dataset;
}
function addLoadEventListeners(a) {
  var b;
  try {
    if (a.nodeType !== Node.ELEMENT_NODE) return;
  } catch (a) {
    return;
  }
  if (parentIsNotHeadNorBody(a) || !isTagSupported(a)) return;
  var c = (b = getNodeDataSet(a)) == null ? void 0 : b.bootloaderHash;
  if (c != null && c !== "") {
    var d = null,
      e = function () {
        (window._btldr[c] = 1), d == null ? void 0 : d();
      };
    d = function () {
      a.removeEventListener("load", e), a.removeEventListener("error", e);
    };
    a.addEventListener("load", e);
    a.addEventListener("error", e);
  }
}
(function () {
  Array.from(
    document.querySelectorAll('script,link[data-async-css="1"]')
  ).forEach(function (a) {
    return addLoadEventListeners(a);
  });
  var a = new MutationObserver(function (a, b) {
    a.forEach(function (a) {
      a.type === "childList" &&
        Array.from(a.addedNodes).forEach(function (a) {
          addLoadEventListeners(a);
        });
    });
  });
  a.observe(document.getElementsByTagName("html")[0], {
    attributes: !1,
    childList: !0,
    subtree: !0,
  });
})();
//# sourceURL=https://static.cdninstagram.com/rsrc.php/v3/yu/r/emmFfFsTUtD.js?_nc_x=Ij3Wp8lg5Kz
// This code appears to be part of a mechanism for managing the loading and handling of script and link elements in the DOM, particularly for elements with custom attributes like data-async-css and bootloaderHash. 
// It dynamically adds event listeners based on the presence and attributes of these elements and responds to changes in the DOM structure. 
// This could be related to optimizing resource loading or handling asynchronous dependencies in a web application.