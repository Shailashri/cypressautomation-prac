const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  watchForFileChanges:false,
  projectId: "9n8wr4",
  //viewportHeight:736,
  //viewportWidth:414, //iphone 6 screen we will get the output
  e2e: {
    //specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },

    env:{
      username:'Admin',
      password:'admin123'
     }
  },
});
