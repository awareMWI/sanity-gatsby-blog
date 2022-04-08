export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "625057e8cda6ce2b05a76fe4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-q1ru15og",
                  apiId: "57807af8-721d-4c89-b473-89bdb9bb6800",
                },
                {
                  buildHookId: "625057e91c85ca262f070d09",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8q9vnpro",
                  apiId: "79e11bfd-a2c0-4d2d-a23a-635808a989cc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/awareMWI/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8q9vnpro.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
