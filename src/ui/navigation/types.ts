export enum Screen {
  Home = 'Home',
  Detail = 'Detail',
}

export type MainParamList = {
  [Screen.Home]: undefined;
  [Screen.Detail]: {
    item: string;
  };
};

export type TabParams = {
  [Screen.Home]: undefined;
  [Screen.Detail]: {
    item: string;
  };
};
