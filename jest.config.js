/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleDirectories: ['node_modules'],
	rootDir: './src',
	moduleNameMapper: {
		'^@libs/(.*)$': ['<rootDir>/libs/$1'],
		'^@mocks/(.*)$': ['<rootDir>/mocks/$1'],
	},
};
