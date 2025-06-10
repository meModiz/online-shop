export enum CategoryIcons {
  SMARTPHONE = "smartphone",
  MONITOR = "monitor",
  WATCH = "watch",
  CAMERA = "camera",
  HEADPHONES = "headphones",
  GAMING = "gamepad-2",
}

export enum NavigationIcons {
  HEART = "heart",
  SHOPPING_CART = "shopping-cart",
  USER = "user",
}

export type CategoryIcon_T = CategoryIcons;

export type NavigationIcon_T = NavigationIcons;

export const ROUTES = {
  home: {
    path: "/",
    label: "Home",
  },
  about: {
    path: "/about",
    label: "About",
  },
  contact: {
    path: "/contact",
    label: "Contact us",
  },
  blog: {
    path: "/blog",
    label: "Blog",
  },
  cart: {
    path: "/cart",
    icon: NavigationIcons.SHOPPING_CART,
  },
  favorites: {
    path: "/favorites",
    icon: NavigationIcons.HEART,
  },
  account: {
    path: "/account",
    icon: NavigationIcons.USER,
  },
  category: {
    phones: {
      path: "/category/phones",
      label: "Phones",
      icon: CategoryIcons.SMARTPHONE,
    },
    computers: {
      path: "/category/computers",
      label: "Computers",
      icon: CategoryIcons.MONITOR,
    },
    watches: {
      path: "/category/watches",
      label: "Smart Watches",
      icon: CategoryIcons.WATCH,
    },
    cameras: {
      path: "/category/cameras",
      label: "Camera",
      icon: CategoryIcons.CAMERA,
    },
    audio: {
      path: "/category/audio",
      label: "Headphones",
      icon: CategoryIcons.HEADPHONES,
    },
    gaming: {
      path: "/category/gaming",
      label: "Gaming",
      icon: CategoryIcons.GAMING,
    },
  },
} as const;
