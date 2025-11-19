const getInstalledApps = () => {
  const installedApps = localStorage.getItem("installedApps");
  if (installedApps) {
    const installedAppsList = JSON.parse(installedApps);
    return installedAppsList;
  } else {
    return [];
  }
};

const UnistallApps = (id) => {
  const installedApps = getInstalledApps();
  const remainingApps = installedApps.filter((app) => app != id);
  const data = JSON.stringify(remainingApps);
  localStorage.setItem("installedApps", data);
  return remainingApps;
};

export { UnistallApps };
