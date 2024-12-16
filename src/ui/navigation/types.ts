export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
  Settings = 'Settings',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Settings]: undefined; // Home ha il proprio Stack interno
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
  [Screen.Detail]: {
    id: string;
  };
};
