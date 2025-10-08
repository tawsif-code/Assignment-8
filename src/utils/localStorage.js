const getInstalledApp = () => {
    const installedApp = localStorage.getItem("installedApps");
    if (installedApp) {
        const installedAppData = JSON.parse(installedApp).map(Number);
        return installedAppData;
    }
    else {
        return [];
    }

}

const saveInstalledApp = (id) => {
    const installedAppData = getInstalledApp();
    if (installedAppData.includes(id)) {
        return false;
    }
    else {
        installedAppData.push(id);
        const data = JSON.stringify(installedAppData);
        localStorage.setItem("installedApps", data)
    }
}

const removeInstalledApp = (id) => {
    const installedAppData = getInstalledApp();
    const updated = installedAppData.filter(appId => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
};

export { getInstalledApp, saveInstalledApp, removeInstalledApp };