module.exports = {
    apps : [{
      name: "yelp-camp",
      script: "app.js",
      instances: 2,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    }]
  }
  