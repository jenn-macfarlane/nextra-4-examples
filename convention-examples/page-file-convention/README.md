This follows the [Nextra 4 Docs Theme "Get Started" docs](https://nextra.site/docs/docs-theme/start) using [Page File convention](https://nextra.site/docs/file-conventions/page-file).

Questions:

Currently not compiling, getting the following build error:

```
./node_modules/nextra/dist/server/page-map/placeholder.js:7:1
Export metadata doesn't exist in target module
   5 | import app_top_nav_2_meta from "private-next-root-dir/app/top-nav-2/_meta.js";
   6 | import {metadata as app_top_nav_2_page} from "private-next-root-dir/app/top-nav-2/page.mdx?metadata";
>  7 | import {metadata as app_page} from "private-next-root-dir/app/page.jsx";
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   8 |
   9 | export const pageMap = normalizePageMap([{
  10 |   name: "top-nav-1",

The export metadata was not found in module [project]/convention-examples/page-file-convention/app/page.jsx [app-rsc] (ecmascript).
Did you mean to import default?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.
``
```

- side-nav-1/2 not working with meta files yet
