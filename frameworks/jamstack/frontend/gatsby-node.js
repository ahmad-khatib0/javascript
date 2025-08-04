/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //instead of actions.createPage

  const result = await graphql(
    `
      {
        products: allStrapiProduct {
          edges {
            node {
              name
              strapiId
              description
              category {
                name
              }
              variants {
                id
                color
                size
                style
                price
                images {
                  url
                }
              }
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              name
              description
              filterOptions {
                Size {
                  checked
                  label
                }
                Style {
                  checked
                  label
                }
                Color {
                  checked
                  label
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const products = result.data.products.edges
  const categories = result.data.categories.edges

  // the part of creating a page for each product

  products.forEach(product => {
    createPage({
      path: `/${product.node.category.name.toLowerCase()}/${product.node.name.split(" ")[0].toLowerCase()}`,
      component: require.resolve("./src/templates/ProductDetail.js"),
      // the template to build this page
      context: {
        name: product.node.name,
        id: product.node.strapiId,
        category: product.node.category.name,
        description: product.node.description,
        variants: product.node.variants,
        product: product,
      },
      //  this will be the data that we want to pass to this page
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.node.name.toLowerCase()}`,
      component: require.resolve("./src/templates/ProductList.js"),
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
        filterOptions: category.node.filterOptions,
      },
    })
  })
}


exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions
}) => {
  if (stage == 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: /react-spring-3d-carousel/,
          use: loaders.null()
        }]
      }
    })
  }
}