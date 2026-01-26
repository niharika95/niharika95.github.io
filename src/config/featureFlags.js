const featureFlags = {
  // Set to true to show the new links section and pages
  showRamenNagi: false,
};

export function getFeatureFlag(flagName) {
  if (process.env.NODE_ENV === 'development') {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(`ff_${flagName}`);
    if (paramValue !== null) {
      const value = paramValue === 'true';
      localStorage.setItem(`ff_${flagName}`, value);
      return value;
    }

    const localStorageValue = localStorage.getItem(`ff_${flagName}`);
    if (localStorageValue !== null) {
      return localStorageValue === 'true';
    }
  }
  return featureFlags[flagName];
}

export function setFeatureFlag(flagName, value) {
  if (process.env.NODE_ENV === 'development') {
    localStorage.setItem(`ff_${flagName}`, value);
  }
}

export function getAllFeatureFlags() {
  return Object.keys(featureFlags).reduce((acc, flagName) => {
    acc[flagName] = getFeatureFlag(flagName);
    return acc;
  }, {});
}

const resolvedFeatureFlags = {
  showRamenNagi: getFeatureFlag('showRamenNagi'),
};

export default resolvedFeatureFlags;
