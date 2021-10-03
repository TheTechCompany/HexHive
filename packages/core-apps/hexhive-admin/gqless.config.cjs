/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:7070/graphql",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
