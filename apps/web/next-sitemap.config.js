const fs = require("fs");
const path = require("path");

const getRoutes = (dirPath = "app", locale = "") => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let paths = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      paths = paths.concat(getRoutes(path.join(dirPath, entry.name), locale));
    } else if (entry.name === "page.tsx") {
      const relativePath = path.relative("app", path.join(dirPath, entry.name));
      let route = `/${relativePath.replace(/\/page\.tsx$/, "").replace(/\/index$/, "")}`;

      route = route.replace(/\(pages\)/g, "").replace(/\/\(locale\)\//, "/");

      paths.push(route === "" ? "/" : route);
    }
  }
  return paths;
};

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
    "https://example.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;
    if (path === "/") {
      priority = 1.0;
    } else if (path === "/about-me" || path === "/blog") {
      priority = 0.9;
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const routes = getRoutes("app");
    return routes.map((route) => ({
      loc: route,
      changefreq: "weekly",
      priority: 0.7,
    }));
  },
};
