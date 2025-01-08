export enum Screen {
  TabNavigator = 'TabNavigator',
  Home = 'Home',
  Detail = 'Detail',
  Settings = 'Settings',
  Favorites = 'Favorites',
}

export type TabParams = {
  [Screen.Home]: {
    hasFavoritesUpdated: boolean;
  };
  [Screen.Settings]: undefined;
  [Screen.Favorites]: {
    hasFavoritesUpdated: boolean;
  };
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
    idsArray: number[];
  };
};
