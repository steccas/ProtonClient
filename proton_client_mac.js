var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
  name: 'proton-client', // will be inferred if not specified
  targetUrl: 'https://beta.protonmail.com', // required
  platform: 'mac', // defaults to the current system
  arch: 'x64', // defaults to the current system
  appVersion: '1.1.1',
  overwrite: true,
  asar: false, // see conceal
  icon: './icons/icon.icns',
  counter: true,
  bounce: true,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  ignoreCertificate: false,
  disableGpu: true,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  internalUrls: '(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(protonmail.com)', // defaults to URLs on same second-level domain as app
  blockExternalUrls: false,
  darwinDarkModeSupport: true,
  insecure: false,
  honest: false,
  zoom: 1.0,
  singleInstance: true,
  clearCache: false,
  tray: false,
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});
