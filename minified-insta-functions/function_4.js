/*FB_PKG_DELIM*/

var dataElement = document.getElementById("__eqmc");
if (dataElement != null) {
  var params = JSON.parse(dataElement.textContent),
    uri = params.u,
    event_id = params.e,
    script_path = params.s,
    weight = params.w,
    fb_dtsg = params.f,
    lsd = params.l;
  if (navigator.sendBeacon) {
    var mark = function (a, b) {
        var c =
          p && p.now ? Math.floor(p.now()) : Math.max(Date.now() - start, 0);
        a =
          "event_id=" +
          event_id +
          (a == null ? "" : "&marker_id=" + a) +
          "&marker_page_time=" +
          c +
          "&script_path=" +
          encodeURIComponent(script_path) +
          "&weight=" +
          weight +
          (b ? "&client_start=1" : "") +
          (fb_dtsg ? "&fb_dtsg=" + encodeURIComponent(fb_dtsg) : "") +
          (lsd ? "&lsd=" + encodeURIComponent(lsd) : "");
        c = new Blob([a], { type: "application/x-www-form-urlencoded" });
        navigator.sendBeacon(uri, c);
      },
      start = Date.now(),
      p = window.performance;
    mark(weight > 0 ? "ClientScriptStart" : null, !0);
    weight > 0 &&
      window.addEventListener("beforeunload", function () {
        mark("ClientUnload", !1);
      });
  }
}
//# sourceURL=https://static.cdninstagram.com/rsrc.php/v3/yo/r/rMjUV3tlg5-.js?_nc_x=Ij3Wp8lg5Kz
// This code is likely used for client-side performance tracking and analytics.
// It collects various data points related to script execution and page loading times and sends them to a specified server using the navigator.sendBeacon API.
// The data collected can be used for monitoring and analyzing the performance of the webpage.
