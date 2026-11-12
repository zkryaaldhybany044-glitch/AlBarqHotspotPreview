import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.albarq.hotspotprinter',
  appName: 'مطبعة كروت الشبكة',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
};

export default config;
