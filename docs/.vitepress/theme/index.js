// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts';
import VPAeriusLayout from './components/VPAeriusLayout.vue';
import './custom.css';

export default {
  ...DefaultTheme,  
  Layout: VPAeriusLayout
};
