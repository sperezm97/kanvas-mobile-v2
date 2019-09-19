import { Navigation, Options } from 'react-native-navigation';
import * as screeNames from './screenNames';

export const Auth = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: screeNames.HOME_SCREEN,
              name: screeNames.HOME_SCREEN,
            },
          },
        ],
      },
    },
  });
};

export const defaultConfig = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      visible: true,
      style: 'light', // it can be dark too,
      hideWithTopBar: false,
      blur: false,
    },
    layout: {
      direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
      orientation: ['portrait'], // An array of supported orientations ["landscape"]
    },
    popGesture: true,
    // backgroundImage: null,
    // rootBackgroundImage: null,
    modalPresentationStyle: 'fullScreen', // Supported styles are: 'formSheet', 'pageSheet', 'overFullScreen', 'overCurrentContext', 'currentContext', 'popover', 'fullScreen' and 'none'. On Android, only overCurrentContext and none are supported.
    topBar: {
      visible: false,
    },
    bottomTabs: {
      visible: true,
      animate: true, // Controls whether BottomTabs visibility changes should be animated
      currentTabIndex: 0,
      drawBehind: false,
      // backgroundColor: colors.brandSecondary,
      barStyle: 'default', // 'black',
      translucent: false,
      hideShadow: false,
    },
    sideMenu: {
      left: {
        shouldStretchDrawer: false, // defaults to true, when false sideMenu contents not stretched when opened past the width
        // animationVelocity: 2500, // defaults to 840, high number is a faster sideMenu open/close animation
        // width: deviceWidth * 0.8,
        // height: deviceHeight * 0.8,
        visible: false,
        enabled: true,
      },
      right: {
        shouldStretchDrawerk: false, // defaults to true, when false sideMenu contents not stretched when opened past the width
        // animationVelocity: 2500, // defaults to 840, high number is a faster sideMenu open/close animation
        visible: false,
        enabled: false,
      },
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
 * @param mergeOptions Stylign options
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
                height: 0,
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
  Navigation.mergeOptions(componentId, options);
}
