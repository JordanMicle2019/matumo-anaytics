var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
$pdk.controller.addEventListener("OnReleaseStart", function (payload) {
  console.log(payload);
  // _paq.push([
  //   "MediaAnalytics::setMediaTitleFallback",
  //   function () {
  //     return payload.data.title;
  //   },
  // ]);
});

$pdk.controller.addEventListener("OnMediaLoaded", function (payload) {
  console.log(payload);
})(function () {
  var u = "https://vsl.matomo.cloud/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.type = "text/javascript";
  g.async = true;
  g.defer = true;
  g.src = "//cdn.matomo.cloud/vsl.matomo.cloud/matomo.js";
  s.parentNode.insertBefore(g, s);
})();
