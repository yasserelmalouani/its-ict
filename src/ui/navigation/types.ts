export enum Screen {
  TabNavigator = 'TabNavigator',
  Home = 'Home',
  Detail = 'Detail',
  Settings = 'Settings',
}

export type TabParams = {
  [Screen.Home]: undefined;
  [Screen.Settings]: undefined;
};

export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: number;
  };
};
