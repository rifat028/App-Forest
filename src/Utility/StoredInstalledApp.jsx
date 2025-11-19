const getInstalledApps = () => {
  const installedApps = localStorage.getItem("installedApps");
  if (installedApps) {
    const installedAppsList = JSON.parse(installedApps);
    return installedAppsList;
  } else {
    return [];
  }
};

const setInstalledApps = (id) => {
  const installedApps = getInstalledApps();

  if (!installedApps.includes(id)) {
    installedApps.push(id);
    const data = JSON.stringify(installedApps);
    localStorage.setItem("installedApps", data);
  }
};

export { setInstalledApps };
