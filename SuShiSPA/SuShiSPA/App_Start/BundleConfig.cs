using System.Web;
using System.Web.Optimization;

namespace SuShiSPA
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/bundles/sushicss").Include(                     
                      "~/Content/css/kendo.common.min.css",
                      "~/Content/css/kendo.rtl.min.css",
                      "~/Content/css/kendo.metro.min.css",
                      "~/Content/kendo/2016.1.226/kendo.default.min.css",
                      "~/Content/kendo/2016.1.226/kendo.default.min.css",
                      "~/Content/kendo/2016.1.226/kendo.dataviz.default.min.css",
                      "~/Content/css/style.css"));
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                     "~/Scripts/angular-1.5.6/angular.min.js",
                     "~/Scripts/angular-1.5.6/angular-route.min.js",
                     "~/Scripts/angular-1.5.6/angular-resource.min.js",
                     "~/Scripts/angular-1.5.6/angular-animate.min.js",
                     "~/Scripts/jquery - 2.2.3.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/kendo").Include(
                "~/Scripts/kendo/2016.1.226/kendo.web.min.js",
                "~/Scripts/kendo/2016.1.226/kendo.angular.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/sushijs").Include(
                     "~/Content/js/sushi.js"));
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                    "~/App/app.js",
                     "~/App/controllers/homeController.js",
                    "~/App/controllers/detailController.js",
                    "~/App/services/sushiFactory.js"                  
                    ));
        }
    }
}
