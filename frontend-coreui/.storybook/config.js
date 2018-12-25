import { configure } from '@storybook/react';


// Stories loader
const req = require.context("../src/components", true, /.story.js$/);
function loadStories() {
  req.keys().forEach(req);
}



configure(loadStories, module);
