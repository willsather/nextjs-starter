const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/src/(.*)$": "<rootDir>/src/$1",
    "^@/__tests__/(.*)$": "<rootDir>/__tests__/$1",
    "^@/__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  watchPathIgnorePatterns: ["node_modules", "globalConfig"],
};

// https://github.com/vercel/next.js/issues/37542#issuecomment-1151075024
const jestConfig = async () => {
  const customConfig = await createJestConfig(customJestConfig)();
  return {
    ...customConfig,
    moduleNameMapper: {
      "\\.svg$": "<rootDir>/__mocks__/svgMock.js",
      ...customConfig.moduleNameMapper,
    },
  };
};

module.exports = jestConfig;

