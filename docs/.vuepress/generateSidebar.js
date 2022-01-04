const fs = require("fs");
const path = require("path");

function getSideBar(folder) {
  const extension = [".md"];

  const docsPath = path.join(`${__dirname}/../${folder}`)
  const title = folder || 'Site Root' // TODO Read title from README in the docsPath
  const files = fs.readdirSync(docsPath)

  const children = files.filter((item) => {
    const isReadme = item.toLowerCase() === "readme.md"
    const isFile = fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile()
    const hasMatchingFileExt = extension.includes(path.extname(item))
    return !isReadme && isFile && hasMatchingFileExt
  }).map(item => `/${folder}/${item}`.replace('//', ''))

  const folders = files.filter((item) => {
    const isDirectory = fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isDirectory()
    const isHiddenDirectory = (item + '').charAt(0) === '.'
    return isDirectory && !isHiddenDirectory
  }).map(item => `/${item}/`)

  return { title: title, children: [`/${folder}/`.replace('//', ''), ...children] };
}

function previewSidebarConfig(sidebar) {
  const previewFilepath = path.join(__dirname, 'sidebar-preview.json')
  fs.writeFileSync(previewFilepath, JSON.stringify(sidebar, null, 2), 'utf8')
}

function generateSidebar() {
  const docsPath = path.join(`${__dirname}/../`)
  const files = fs.readdirSync(docsPath)
  const folders = files.filter((folder) => {
    const filepath = path.join(`${__dirname}/../`, folder)
    const isDirectory = fs.statSync(filepath).isDirectory()
    const isHiddenDirectory = folder.charAt(0) === '.'
    const readmepath = path.join(filepath, 'README.md')
    let hasReadme
    try {
      hasReadme = fs.statSync(readmepath).isFile()
    } catch (ex) {
      console.error('No README.md file found in', folder)
    }
    return isDirectory && hasReadme && !isHiddenDirectory
  })

  const sidebar = [
    getSideBar(''),
    ...folders.map(folder => getSideBar(folder))
  ]

  previewSidebarConfig(sidebar)

  return sidebar
}

module.exports = generateSidebar
