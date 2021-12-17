module.exports = {
  // purge: ["./pages/**/*.js", "./components/**/*.js"],
  // plugins: [
  //   "tailwindcss",
  //   "postcss-flexbugs-fixes",
  //   [
  //     "postcss-preset-env",
  //     {
  //       autoprefixer: {
  //         flexbox: "no-2009",
  //       },
  //       stage: 3,
  //       features: {
  //         "custom-properties": false,
  //       },
  //     },
  //   ],
  // ],
  "plugins": [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ]
  ]
};
