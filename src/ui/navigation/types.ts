export enum Screen {
  HomeMain = 'HomeMain',
  Home = 'Home',
  Detail = 'Detail',
  Search = 'Search',
}

export type TabParams = {
  [Screen.Home]: undefined; // Home ha il proprio Stack interno
  [Screen.Detail]: {
    item: string;
  };
};

export type HomeStackParamList = {
  [Screen.HomeMain]: {
    text: string;
  };
  [Screen.Search]: undefined;
};

// Per il RootStack
export type MainParamList = {
  TabNavigator: undefined;
};
