export enum Screen {
  TabNavigator = 'TabNavigator',
  Home = 'Home',
  Detail = 'Detail',
  Settings = 'Settings',
  Notifications = 'Notifications',
}

export type TabParams = {
  [Screen.Home]: undefined;
  [Screen.Settings]: undefined;
  [Screen.Notifications]: undefined;
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
    idsArray: number[];
  };
};
