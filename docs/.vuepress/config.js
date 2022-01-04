const generateSidebar = require('./generateSidebar')
const packageJson = require('../../package.json')

const base = `/${packageJson.name}/`

module.exports = {
  base,
  title: packageJson.title || packageJson.name,
  description: packageJson.description,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: generateSidebar()
  }
}
