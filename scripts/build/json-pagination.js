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

/**
 * Pagination for all JSON Communities
 * 
 * @param {string} section 
 * @param {string} prefix
 * @param {*} graphql 
 * @param {*} createPage 
 */
async function createCommunitiesPagination(graphql, createPage, reporter) {
    const result = await graphql(`
      {
        allCommunitiesJson(
            sort: {fields: [title], order: DESC}, 
        ) {
            totalCount
            edges {
                node {
                    title
                    url
                    description
                }
            }
        }
      }
    `)



    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for JSON communities')
        console.log('🚨  ERROR:', result.errors)
    }

    createPaginatedPages({
        edges: result.data.allCommunitiesJson.edges,
        createPage: createPage,
        pageTemplate: "src/templates/blog-archive.js",
        pageLength: 6,
        pathPrefix: 'communities',
        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });

}

/**
 * Pagination for all JSON Design Systems
 * 
 * @param {string} section 
 * @param {string} prefix
 * @param {*} graphql 
 * @param {*} createPage 
 */
async function createDesignSystemsPagination(graphql, createPage, reporter) {
    const result = await graphql(`
      {
        allDesignSystemsJson(
            sort: {fields: [title], order: DESC}, 
        ) {
            totalCount
            edges {
                node {
                    title
                    company
                    url {
                        website
                    }

                }
            }
        }
      }
    `)



    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for JSON design systems')
        console.log('🚨  ERROR:', result.errors)
    }

    createPaginatedPages({
        edges: result.data.allDesignSystemsJson.edges,
        createPage: createPage,
        pageTemplate: "src/templates/blog-archive.js",
        pageLength: 6,
        pathPrefix: 'design-systems',
        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });

}

/**
 * Pagination for all JSON Events
 * 
 * @param {string} section 
 * @param {string} prefix
 * @param {*} graphql 
 * @param {*} createPage 
 */
async function createEventsPagination(graphql, createPage, reporter) {
    const result = await graphql(`
      {
        allEventsJson(
            sort: {fields: [title], order: DESC}, 
        ) {
            totalCount
            edges {
                node {
                    title
                    url
                    date
                    location {
                        city
                        country
                        state
                    }
                }
            }
        }
      }
    `)



    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for JSON events')
        console.log('🚨  ERROR:', result.errors)
    }

    createPaginatedPages({
        edges: result.data.allEventsJson.edges,
        createPage: createPage,
        pageTemplate: "src/templates/blog-archive.js",
        pageLength: 6,
        pathPrefix: 'events',
        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });

}

/**
 * Pagination for all JSON Videos
 * 
 * @param {string} section 
 * @param {string} prefix
 * @param {*} graphql 
 * @param {*} createPage 
 */
async function createVideosPagination(graphql, createPage, reporter) {
    const result = await graphql(`
      {
        allVideosJson(
            sort: {fields: [title], order: DESC}, 
        ) {
            totalCount
            edges {
                node {
                    date
                    title
                    url
                    platform
                    author
                }
            }
        }
      }
    `)



    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for JSON videos')
        console.log('🚨  ERROR:', result.errors)
    }

    createPaginatedPages({
        edges: result.data.allVideosJson.edges,
        createPage: createPage,
        pageTemplate: "src/templates/blog-archive.js",
        pageLength: 6,
        pathPrefix: 'videos',
        buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
    });

}

exports.createArticlesPagination = createArticlesPagination
exports.createCommunitiesPagination = createCommunitiesPagination
exports.createDesignSystemsPagination = createDesignSystemsPagination
exports.createEventsPagination = createEventsPagination
exports.createVideosPagination = createVideosPagination