window.DEFAULT_DOCS_CONFIGURATION = {
  repo: 'https://github.com/circular-o/circular',
  // Configuration variables related to the package
  packagesCdnUrl: `https://cdn.jsdelivr.net/npm`,
  packageOrganization: '@jeysonj2',
  packageName: 'circular',
  // Leave this as latest to get the latest version of the package, otherwise specify a version number
  // Note: The version number must be a valid semver version
  // Note: If you leave it as "latest" and you are using the metadata plugin, the version number will be automatically updated
  packageVersion: 'latest',
  docsWebsite: 'https://circular-o.github.io/circular',
  repoUrl: 'https://github.com/circular-o/circular',
  twitterUser: 'circular_o',
  sponsorUrl: 'https://github.com/sponsors/jeysonj2',
  // Configuration variables related to the react playground
  reactVersion: '17.0.2',
  reactCdnUrl: `https://cdn.skypack.dev`,
  // Get base path of the page
  docsBasePath: `${location.pathname.split('/').slice(0, -1).join('/')}/`
};

// Get config vars from the sessionStore
window.getDocsConfig = () => {
  // The package data is stored in the sessionStore by the metadata plugin, please see the metadata.js file
  const packageData = sessionStorage.getItem('sl-package-data')
    ? JSON.parse(sessionStorage.getItem('sl-package-data'))
    : {};

  return packageData;
};

// Store package data in session storage so we can access it from the playground
window.setDocsConfig = newConfig => {
  const oldConfig = window.getDocsConfig();
  const config = { ...window.DEFAULT_DOCS_CONFIGURATION, ...oldConfig, ...newConfig };

  // Updating the variables which are composed by other package data
  const packageUrlNoVersion = `${config.packagesCdnUrl}/${config.packageOrganization}/${config.packageName}`;
  const packageUrl = `${config.packagesCdnUrl}/${config.packageOrganization}/${config.packageName}@${config.packageVersion}`;
  const reactUrl = `${config.reactCdnUrl}/react@${config.reactVersion}`;
  const reactPackageUrl = `${config.reactCdnUrl}/${config.packageOrganization}/${config.packageName}@${config.packageVersion}`;

  sessionStorage.setItem(
    'sl-package-data',
    JSON.stringify({
      ...config,
      packageUrlNoVersion,
      packageUrl,
      reactUrl,
      reactPackageUrl
    })
  );
};

window.setDocsConfig({});
