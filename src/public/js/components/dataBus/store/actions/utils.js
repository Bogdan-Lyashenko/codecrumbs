import saveAs from 'file-saver';
const { version } = require('app.package.json');

import { FOLDER_OPEN_STATE } from 'utils/constants';

export const getFoldersForPaths = (paths, openedFolders, override) =>
  paths.reduce((res, path) => {
    const folders = path.split('/');
    folders.pop(); //remove file

    folders.forEach((f, i, l) => {
      const key = l.slice(0, i + 1).join('/');
      res[key] =
        override || !openedFolders[key]
          ? FOLDER_OPEN_STATE.OPEN_ACTIVE_CHILDREN_ONLY
          : openedFolders[key];
    });

    return res;
  }, {});

export const downloadObjectAsJsonFile = (data, fileName = 'codecrumbs-showcase.json') => {
  const fileToSave = new Blob([JSON.stringify({ version, data }, undefined, 2)], {
    type: 'application/json',
    name: fileName
  });

  saveAs(fileToSave, fileName);
};
