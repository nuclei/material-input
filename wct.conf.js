module.exports = {
    "verbose": false,
    "plugins": {
        "local": {
          "browsers": ["chrome"]
      },
      istanbul: {
        dir: "./coverage",
        reporters: ["text-summary", "lcov"],
        include: [
          "/src/*.js"
        ],
        exclude: [
        ]
      }
    }
};
// , "firefox" , "safari"
