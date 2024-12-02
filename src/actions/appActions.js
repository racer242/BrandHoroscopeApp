export const appInit = (data) => {
  return {
    type: "APP_INIT",
    data: {
      ...data,
    },
  };
};

export const setStoreData = (data) => {
  return {
    type: "SET_STORE_DATA",
    data: {
      ...data,
    },
  };
};

export const loadStoreDataError = (data) => {
  return {
    type: "LOAD_STORE_DATA_ERROR",
    data: {
      ...data,
      dataLoaded: false,
      reloadData: false,
      loadDataError: true,
    },
  };
};

export const reloadStoreData = () => {
  return {
    type: "RELOAD_STORE_DATA",
    data: {
      dataLoaded: false,
      reloadData: true,
      loadDataError: false,
    },
  };
};

export const waitingForReloadStoreData = () => {
  return {
    type: "WAITING_FOR_RELOAD_STORE_DATA",
    data: {
      dataLoaded: false,
    },
  };
};

export const setAppData = (data) => {
  return {
    type: "SET_APP_DATA",
    data,
  };
};

export const setStorageData = (data) => {
  return {
    type: "SET_STORAGE_DATA",
    data,
  };
};

export const saveStorageData = () => {
  return {
    type: "SAVE_STORAGE_DATA",
    data: {
      saveStorageData: true,
      dataForStorageChanged: null,
    },
  };
};

export const storageDataSaved = () => {
  return {
    type: "STORAGE_DATA_SAVED",
    data: {
      saveStorageData: false,
    },
  };
};

export const userDateChanged = (date) => {
  return {
    type: "USER_DATE_CHANGED",
    date,
  };
};

export const userDateSelected = () => {
  return {
    type: "USER_DATE_SELECTED",
  };
};

export const userMatchSelected = () => {
  return {
    type: "USER_MATCH_SELECTED",
  };
};
