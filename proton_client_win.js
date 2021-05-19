var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = { //nativefier -n ProtonMail -a x64 --tray --single-instance --internal-urls "(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(protonmail.com)" beta.protonmail.com
  name: 'ProtonClient', // will be inferred if not specified
  targetUrl: 'https://beta.protonmail.com', // required
  platform: 'windows', // defaults to the current system
  arch: 'x64', // defaults to the current system
  appVersion: '1.2.0',
  overwrite: true,
  asar: false, // see conceal
  icon: './icons/icon.ico',
  counter: true,
  bounce: true,
  width: 1440,
  height: 900,
  showMenuBar: false,
  fastQuit: false,
  ignoreCertificate: false,
  disableGpu: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  internalUrls: '(http(s)?:\/\/.)?(www\.)?([-a-zA-Z0-9@:%_\+.~#?&//=]*)?(protonmail.com)', // defaults to URLs on same second-level domain as app
  blockExternalUrls: false,
  insecure: false,
  honest: false,
  zoom: 1.0,
  singleInstance: true,
  clearCache: false,
  tray: true,
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
  win32metadata: {
    CompanyName: 'Luca Steccanella',
    FileDescription: 'Proton Client',
    OriginalFilename: 'ProtonClient',
    ProductName: 'Proton Client',
    InternalName: 'Luca Steccanella'
  },
};

nativefier(options, function (error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});