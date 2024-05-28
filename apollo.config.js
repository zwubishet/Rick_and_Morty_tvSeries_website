// apollo.config.js
import {module} from 'eslint'
module.exports = {
  client: {
    service: {
      name: 'minab_rickandmorty-series',
      // URL to the GraphQL API
      url: 'https://rickandmortyapi.com/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}