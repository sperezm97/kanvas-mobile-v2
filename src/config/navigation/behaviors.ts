import { Navigation, Options } from 'react-native-navigation';
import * as screeNames from './screenNames';
import { icons, colors, deviceWidth, deviceHeight } from '@styles';

/**
 * Auth behavior in kanvas apps
 */
export const Auth = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: screeNames.WELCOME_SCREEN,
              name: screeNames.WELCOME_SCREEN,
            },
          },
        ],
      },
    },
  });
};

/**
 * Principal behavior in kanvas apps
 */
export const principal = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: screeNames.SIDEMENU_SCREEN,
            name: screeNames.SIDEMENU_SCREEN,
          },
        },
        center: {
          bottomTabs: {
            id: 'Principal',
            children: [
              {
                component: {
                  id: screeNames.HOME_SCREEN,
                  name: screeNames.HOME_SCREEN,
                  options: {
                    bottomTab: {
                      icon: icons.bottomBar.home,
                    },
                  },
                },
              },
            ],
            options: {
              bottomTabs: {
                backgroundColor: colors.midBase,
              },
            },
          },
        },
      },
    },
  });
};

export const defaultConfig = async () => {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.base,
      drawBehind: true,
      visible: true,
      style: 'light', // it can be dark too,
    },
    layout: {
      topMargin: (await Navigation.constants()).statusBarHeight,
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      orientation: ['portrait'], // An array of supported orientations ["landscape"]
    },
    popGesture: true,
    topBar: {
      visible: false,
    },
    bottomTabs: {
      visible: true,
      animate: true, // Controls whether BottomTabs visibility changes should be animated
      currentTabIndex: 0,
      drawBehind: true,
      backgroundColor: colors.brandSecondary,
      barStyle: 'default',
      translucent: false,
      hideShadow: false,
      titleDisplayMode: 'alwaysShow',
      elevation: 8,
    },
    bottomTab: {
      iconInsets: { top: 0, left: 0, bottom: 0, right: 0 },
      iconColor: colors.base,
      selectedIconColor: colors.darkBase,
      textColor: colors.base,
      selectedTextColor: colors.darkBase,
      fontSize: 12,
      fontWeight: 'regular',
    },
    sideMenu: {
      left: {
        width: deviceWidth * 0.6,
        height: deviceHeight * 0.6,
        visible: false,
        enabled: true,
      },
      openGestureMode: 'bezel',
    },
    overlay: {
      interceptTouchOutside: true,
      handleKeyboardEvents: true,
    },
  });
};

/**
 * Push a new screen into this screen's navigation stack.
 * @param componentId Scree name
 * @param screenName Screen name
 * @param passProps push new object
 */
export function push(
  componentId: string,
  screenName: string,
  passProps?: any,
  options?: Options,
) {
  Navigation.push(componentId, {
    component: {
      id: screenName,
      name: screenName,
      passProps,
      options: {
        topBar: {
          visible: false,
        },
        bottomTabs: {
          visible: false,
          drawBehind: true,
        },
        ...options,
      },
    },
  });
}

/**
 * go back to preview screen
 * @param componentId - actual screen id
 */
export function popScreen(componentId: string, mergeOptions?: Options) {
  Navigation.pop(componentId, mergeOptions);
}

/**
 * Pop the stack to a given component.
 * @param componentId Screen name
 * @param mergeOptions Styling options
 */
export function popToScreen(componentId: string, mergeOptions?: Options) {
  Navigation.popTo(componentId, mergeOptions);
}

/**
 * Pop all the screens until the root from this screen's navigation stack.
 * @param componentId Screen name
 * @param mergeOptions Styling options
 */
export function popToRoot(componentId: string, mergeOptions?: Options) {
  Navigation.popToRoot(componentId, mergeOptions);
}

/**
 * Reset the current navigation stack to a new screen component
 * @param componentId Screen name
 * @param screenName Screen Name
 * @param passProps Push new properties
 */
export function setNewStack(
  componentId: string,
  screenName: string,
  passProps?: any,
  options?: Options,
) {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        id: screenName,
        name: screenName,
        passProps,
        options: {
          ...options,
          animations: {
            setStackRoot: {
              enabled: true,
            },
          },
        },
      },
    },
  ]);
}

/**
 * Show a screen as a modal.
 * @param screenName Screen Name
 * @param passProps push objects to screen
 */
export function showModal(
  screenName: string,
  passProps: any,
  options?: Options,
) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: screenName,
            name: screenName,
            passProps,
            options: {
              ...options,
              topBar: {
                visible: false,
              },
              bottomTabs: {
                visible: false,
                drawBehind: true,
              },
            },
          },
        },
      ],
    },
  });
}

/**
 * Dismiss the current modal.
 * @param componentId Screen Name
 */
export function dismissModal(componentId: string, mergeOptions?: Options) {
  Navigation.dismissModal(componentId, mergeOptions);
}

/**
 * Dismiss all the current modals at the same time.
 */
export function dismissAllModals(mergeOptions?: Options) {
  Navigation.dismissAllModals(mergeOptions);
}

/**
 * Set options dynamically for component.
 * @param componentId Screen Name
 * @param mergeOptions options to style
 */
export function mergeOptions(componentId: string, options?: Options) {
  Navigation.mergeOptions(componentId, options || {});
}
/**
 * Toggling between on or off when you selected a hamburger menu.
 */
export function toggleDrawer() {
  Navigation.mergeOptions(screeNames.SIDEMENU_SCREEN, {
    sideMenu: {
      left: {
        visible: true,
      },
    },
  });
}
