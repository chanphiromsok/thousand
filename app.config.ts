import { ConfigContext, ExpoConfig } from "@expo/config";
import { Env } from "./env";

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
  return {
    ...config,
    name: Env.NAME,
    slug: Env.SCHEME,
    scheme: Env.SCHEME,
    version: Env.VERSION,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    newArchEnabled: false,
    assetBundlePatterns: ["**/*"],
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: Env.BUNDLE_ID,
      buildNumber: Env.IOS_BUILD_NUMBER,
      config: {
        usesNonExemptEncryption: false,
      },
    },
    platforms: ["ios", "android"],
    plugins: [
      "react-native-bottom-tabs",
      ["react-native-edge-to-edge", { android: { parentTheme: "Light" } }],
      [
        "expo-build-properties",
        {
          android: {
            usesCleartextTraffic: true,
          },
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      [
        "expo-secure-store",
        {
          faceIDPermission:
            "Allow $(PRODUCT_NAME) to access your Face ID biometric data.",
        },
      ],
      ["expo-dev-launcher", { launchMode: "most-recent" }],
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share them with your friends.",
        },
      ],
      [
        "expo-font",
        {
          fonts: ["./assets/fonts/material-symbols.ttf"],
          android: {
            fonts: [
              {
                fontFamily: "Figtree",
                fontDefinitions: [
                  {
                    path: "./assets/fonts/Figtree-Regular.ttf",
                    weight: 400,
                  },
                  {
                    path: "./assets/fonts/Figtree-Medium.ttf",
                    weight: 500,
                  },
                  {
                    path: "./assets/fonts/Figtree-SemiBold.ttf",
                    weight: 600,
                  },
                  {
                    path: "./assets/fonts/Figtree-Bold.ttf",
                    weight: 700,
                  },
                  {
                    path: "./assets/fonts/Figtree-ExtraBold.ttf",
                    weight: 800,
                  },
                ],
              },
            ],
          },
          ios: {
            fonts: [
              "./assets/fonts/Figtree-Regular.ttf",
              "./assets/fonts/Figtree-Medium.ttf",
              "./assets/fonts/Figtree-SemiBold.ttf",
              "./assets/fonts/Figtree-Bold.ttf",
              "./assets/fonts/Figtree-ExtraBold.ttf",
            ],
          },
        },
      ],
    ],
    android: {
      package: Env.PACKAGE,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    experiments: {
      reactCompiler: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  };
};
