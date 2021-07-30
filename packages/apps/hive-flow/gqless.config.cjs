/**
 * @type {import("@gqless/cli").GQlessConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: "string" },
  introspection: {
    endpoint: "http://localhost:8081/graphql",
    headers: {
      "Authorization": "Bearer 922bfcc9c6d7e3902b2742516731fbef14c66584"
    },
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;
