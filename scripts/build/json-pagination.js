const createPaginatedPages = require("gatsby-paginate");

/**
 * Pagination for all JSON Articles
 * 
 * @param {string} section 
 * @param {string} prefix
 * @param {*} graphql 
 * @param {*} createPage 
 */
async function createArticlesPagination(graphql, createPage, reporter) {
    const result = await graphql(`
      {
        allArticlesJson(
            sort: {fields: [date], order: DESC}, 
        ) {
            totalCount
            edges {
                node {
                    title
                    url
                    description
                    author
                    date
                }
            }
        }
      }
    `)



    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for JSON articles')
        console.log('🚨  ERROR:', result.errors)
    }

    createPaginatedPages({
        edges: result.data.allArticlesJson.edges,
        createPage: createPage,
        pageTemplate: "src/templates/blog-archive.js",
        pageLength: 6,
        pathPrefix: 'articles',
        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });

}

exports.createArticlesPagination = createArticlesPagination