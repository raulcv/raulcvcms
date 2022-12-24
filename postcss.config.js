module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    process.env.NODE_ENV !== 'production' ?
      {
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
        ],
      } : undefined,
    'postcss-preser-env'
  ]

}
