import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'appAll.ionic.all',
  appName: 'All Résidences',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
