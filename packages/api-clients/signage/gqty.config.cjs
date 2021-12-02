/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:9009/graphql",
    headers: {},
  },
  destination: "./src/gqty/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
