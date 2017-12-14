/**
 * This file is used in server/routes, without babel transpilation
 */

/* eslint key-spacing: ["error", { "align": "value" }] */
module.exports = {
  root: '/',

  editor:    '/editor',
  mapEditor: '/editor/:mapType',
  upload:    '/editor/:mapType/upload',
  editData:  '/editor/:mapType/edit-data',
  editMap:   '/editor/:mapType/edit-map',

  clickEditor:    '/click-editor',
  clickMapEditor: '/click-editor/:mapType',

  contact: '/contact',

  showcase: '/showcase',
}
