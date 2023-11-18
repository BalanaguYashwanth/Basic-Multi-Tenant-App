module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
      ],
      moduleNameMapper: {
        /* Handle CSS imports (with CSS modules)
        https://jestjs.io/docs/webpack#mocking-css-modules */
        '^.+\\.module\\.(scss|sass|css)$': 'identity-obj-proxy',
    
        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    
        /* Handle image imports
        https://jestjs.io/docs/webpack#handling-static-assets */
        '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
        'identity-obj-proxy',
      },
      testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
      testEnvironment: 'jsdom',
      transform: {
        /* Use babel-jest to transpile tests with the next/babel preset
        https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
      },
      transformIgnorePatterns: [
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.jsx$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
        "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
    ],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
}