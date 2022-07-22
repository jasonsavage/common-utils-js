/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: ['.src/**/*.{ts}', '!**/node_modules/**'],
    detectOpenHandles: true,
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
};
