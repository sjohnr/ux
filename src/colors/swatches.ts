export interface Swatch {
  p50: string;
  p100: string;
  p200: string;
  p300: string;
  p400: string;
  p500: string;
  p600: string;
  p700: string;
  p800: string;
  p900: string;
  a100: string;
  a200: string;
  a400: string;
  a700: string;
}

export const swatches = {
  red: {
    p50: '#FFEBEE',
    p100: '#FFCDD2',
    p200: '#EF9A9A',
    p300: '#E57373',
    p400: '#EF5350',
    p500: '#F44336',
    p600: '#E53935',
    p700: '#D32F2F',
    p800: '#C62828',
    p900: '#B71C1C',
    a100: '#FF8A80',
    a200: '#FF5252',
    a400: '#FF1744',
    a700: '#D50000'
  },
  pink: {
    p50: '#FCE4EC',
    p100: '#F8BBD0',
    p200: '#F48FB1',
    p300: '#F06292',
    p400: '#EC407A',
    p500: '#E91E63',
    p600: '#D81B60',
    p700: '#C2185B',
    p800: '#AD1457',
    p900: '#880E4F',
    a100: '#FF80AB',
    a200: '#FF4081',
    a400: '#F50057',
    a700: '#C51162'
  },
  purple: {
    p50: '#F3E5F5',
    p100: '#E1BEE7',
    p200: '#CE93D8',
    p300: '#BA68C8',
    p400: '#AB47BC',
    p500: '#9C27B0',
    p600: '#8E24AA',
    p700: '#7B1FA2',
    p800: '#6A1B9A',
    p900: '#4A148C',
    a100: '#EA80FC',
    a200: '#E040FB',
    a400: '#D500F9',
    a700: '#AA00FF'
  },
  deepPurple: {
    p50: '#EDE7F6',
    p100: '#D1C4E9',
    p200: '#B39DDB',
    p300: '#9575CD',
    p400: '#7E57C2',
    p500: '#673AB7',
    p600: '#5E35B1',
    p700: '#512DA8',
    p800: '#4527A0',
    p900: '#311B92',
    a100: '#B388FF',
    a200: '#7C4DFF',
    a400: '#651FFF',
    a700: '#6200EA'
  },
  indigo: {
    p50: '#E8EAF6',
    p100: '#C5CAE9',
    p200: '#9FA8DA',
    p300: '#7986CB',
    p400: '#5C6BC0',
    p500: '#3F51B5',
    p600: '#3949AB',
    p700: '#303F9F',
    p800: '#283593',
    p900: '#1A237E',
    a100: '#8C9EFF',
    a200: '#536DFE',
    a400: '#3D5AFE',
    a700: '#304FFE'
  },
  blue: {
    p50: '#E3F2FD',
    p100: '#BBDEFB',
    p200: '#90CAF9',
    p300: '#64B5F6',
    p400: '#42A5F5',
    p500: '#2196F3',
    p600: '#1E88E5',
    p700: '#1976D2',
    p800: '#1565C0',
    p900: '#0D47A1',
    a100: '#82B1FF',
    a200: '#448AFF',
    a400: '#2979FF',
    a700: '#2962FF'
  },
  lightBlue: {
    p50: '#E1F5FE',
    p100: '#B3E5FC',
    p200: '#81D4FA',
    p300: '#4FC3F7',
    p400: '#29B6F6',
    p500: '#03A9F4',
    p600: '#039BE5',
    p700: '#0288D1',
    p800: '#0277BD',
    p900: '#01579B',
    a100: '#80D8FF',
    a200: '#40C4FF',
    a400: '#00B0FF',
    a700: '#0091EA'
  },
  cyan: {
    p50: '#E0F7FA',
    p100: '#B2EBF2',
    p200: '#80DEEA',
    p300: '#4DD0E1',
    p400: '#26C6DA',
    p500: '#00BCD4',
    p600: '#00ACC1',
    p700: '#0097A7',
    p800: '#00838F',
    p900: '#006064',
    a100: '#84FFFF',
    a200: '#18FFFF',
    a400: '#00E5FF',
    a700: '#00B8D4'
  },
  teal: {
    p50: '#E0F2F1',
    p100: '#B2DFDB',
    p200: '#80CBC4',
    p300: '#4DB6AC',
    p400: '#26A69A',
    p500: '#009688',
    p600: '#00897B',
    p700: '#00796B',
    p800: '#00695C',
    p900: '#004D40',
    a100: '#A7FFEB',
    a200: '#64FFDA',
    a400: '#1DE9B6',
    a700: '#00BFA5'
  },
  green: {
    p50: '#E8F5E9',
    p100: '#C8E6C9',
    p200: '#A5D6A7',
    p300: '#81C784',
    p400: '#66BB6A',
    p500: '#4CAF50',
    p600: '#43A047',
    p700: '#388E3C',
    p800: '#2E7D32',
    p900: '#1B5E20',
    a100: '#B9F6CA',
    a200: '#69F0AE',
    a400: '#00E676',
    a700: '#00C853'
  },
  lightGreen: {
    p50: '#F1F8E9',
    p100: '#DCEDC8',
    p200: '#C5E1A5',
    p300: '#AED581',
    p400: '#9CCC65',
    p500: '#8BC34A',
    p600: '#7CB342',
    p700: '#689F38',
    p800: '#558B2F',
    p900: '#33691E',
    a100: '#CCFF90',
    a200: '#B2FF59',
    a400: '#76FF03',
    a700: '#64DD17'
  },
  lime: {
    p50: '#F9FBE7',
    p100: '#F0F4C3',
    p200: '#E6EE9C',
    p300: '#DCE775',
    p400: '#D4E157',
    p500: '#CDDC39',
    p600: '#C0CA33',
    p700: '#AFB42B',
    p800: '#9E9D24',
    p900: '#827717',
    a100: '#F4FF81',
    a200: '#EEFF41',
    a400: '#C6FF00',
    a700: '#AEEA00'
  },
  yellow: {
    p50: '#FFFDE7',
    p100: '#FFF9C4',
    p200: '#FFF59D',
    p300: '#FFF176',
    p400: '#FFEE58',
    p500: '#FFEB3B',
    p600: '#FDD835',
    p700: '#FBC02D',
    p800: '#F9A825',
    p900: '#F57F17',
    a100: '#FFFF8D',
    a200: '#FFFF00',
    a400: '#FFEA00',
    a700: '#FFD600'
  },
  amber: {
    p50: '#FFF8E1',
    p100: '#FFECB3',
    p200: '#FFE082',
    p300: '#FFD54F',
    p400: '#FFCA28',
    p500: '#FFC107',
    p600: '#FFB300',
    p700: '#FFA000',
    p800: '#FF8F00',
    p900: '#FF6F00',
    a100: '#FFE57F',
    a200: '#FFD740',
    a400: '#FFC400',
    a700: '#FFAB00'
  },
  orange: {
    p50: '#FFF3E0',
    p100: '#FFE0B2',
    p200: '#FFCC80',
    p300: '#FFB74D',
    p400: '#FFA726',
    p500: '#FF9800',
    p600: '#FB8C00',
    p700: '#F57C00',
    p800: '#EF6C00',
    p900: '#E65100',
    a100: '#FFD180',
    a200: '#FFAB40',
    a400: '#FF9100',
    a700: '#FF6D00'
  },
  deepOrange: {
    p50: '#FBE9E7',
    p100: '#FFCCBC',
    p200: '#FFAB91',
    p300: '#FF8A65',
    p400: '#FF7043',
    p500: '#FF5722',
    p600: '#F4511E',
    p700: '#E64A19',
    p800: '#D84315',
    p900: '#BF360C',
    a100: '#FF9E80',
    a200: '#FF6E40',
    a400: '#FF3D00',
    a700: '#DD2C00'
  },
  brown: {
    p50: '#EFEBE9',
    p100: '#D7CCC8',
    p200: '#BCAAA4',
    p300: '#A1887F',
    p400: '#8D6E63',
    p500: '#795548',
    p600: '#6D4C41',
    p700: '#5D4037',
    p800: '#4E342E',
    p900: '#3E2723'
  },
  grey: {
    p50: '#FAFAFA',
    p100: '#F5F5F5',
    p200: '#EEEEEE',
    p300: '#E0E0E0',
    p400: '#BDBDBD',
    p500: '#9E9E9E',
    p600: '#757575',
    p700: '#616161',
    p800: '#424242',
    p900: '#212121'
  },
  blueGrey: {
    p50: '#ECEFF1',
    p100: '#CFD8DC',
    p200: '#B0BEC5',
    p300: '#90A4AE',
    p400: '#78909C',
    p500: '#607D8B',
    p600: '#546E7A',
    p700: '#455A64',
    p800: '#37474F',
    p900: '#263238'
  },
  black: '#000000',
  white: '#FFFFFF'
};
