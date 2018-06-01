import {convertToRem} from './utils';

const FONT_FAMILY_HEADER = 'Roboto';
const FONT_FAMILY_BODY = 'Roboto';
export const BASE_FONT_SIZE = 12;

const FONT_WEIGHTS = {
  THIN: 100,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

export const typography = {
  fontSize: {
    h1: convertToRem(96),
    h2: convertToRem(60),
    h3: convertToRem(48),
    h4: convertToRem(34),
    h5: convertToRem(24),
    h6: convertToRem(20),
    subtitle1: convertToRem(16),
    subtitle2: convertToRem(14),
    body1: convertToRem(16),
    body2: convertToRem(14),
    button: convertToRem(14),
    caption: convertToRem(12),
    overline: convertToRem(10),
  },
  fontWeight: {
    h1: FONT_WEIGHTS.LIGHT,
    h2: FONT_WEIGHTS.LIGHT,
    h3: FONT_WEIGHTS.REGULAR,
    h4: FONT_WEIGHTS.REGULAR,
    h5: FONT_WEIGHTS.REGULAR,
    h6: FONT_WEIGHTS.MEDIUM,
    subtitle1: FONT_WEIGHTS.REGULAR,
    subtitle2: FONT_WEIGHTS.MEDIUM,
    body1: FONT_WEIGHTS.REGULAR,
    body2: FONT_WEIGHTS.REGULAR,
    button: FONT_WEIGHTS.MEDIUM,
    caption: FONT_WEIGHTS.REGULAR,
    overline: FONT_WEIGHTS.REGULAR,
  },
  lineHeight: {
    h1: convertToRem(96),
    h2: convertToRem(60),
    h3: convertToRem(48),
    h4: convertToRem(34),
    h5: convertToRem(24),
    h6: convertToRem(20),
    subtitle1: convertToRem(16),
    subtitle2: convertToRem(14),
    body1: convertToRem(16),
    body2: convertToRem(14),
    button: convertToRem(14),
    caption: convertToRem(12),
    overline: convertToRem(10),
  },
  letterSpacing: {
    h1: -1.5,
    h2: -0.5,
    h3: 0,
    h4: 0.25,
    h5: 0,
    h6: 0.15,
    subtitle1: 0.15,
    subtitle2: 0.1,
    body1: 0.5,
    body2: convertToRem(0.25),
    button: 0.75,
    caption: 0.4,
    overline: 1.5,
  },
  casing: {
    h1: 'normal',
    h2: 'normal',
    h3: 'normal',
    h4: 'normal',
    h5: 'normal',
    h6: 'normal',
    subtitle1: 'normal',
    subtitle2: 'normal',
    body1: 'normal',
    body2: 'normal',
    button: 'uppercase',
    caption: 'normal',
    overline: 'uppercase',
  },
  opacity: {
    h1: 0.87,
    h2: 0.87,
    h3: 0.87,
    h4: 0.87,
    h5: 0.87,
    h6: 0.87,
    subtitle1: 0.87,
    subtitle2: 0.87,
    body1: 0.87,
    body2: 0.87,
    button: 0.87,
    caption: 0.38,
    overline: 0.38,
  },
};

export const font = style => `
  font-family: ${FONT_FAMILY_HEADER}; 
  font-weight: ${typography.fontWeight[style]}; 
  font-size: ${typography.fontSize[style]};
  line-height: ${typography.lineHeight[style]};
  letter-spacing: ${typography.letterSpacing[style]};
  color: rgba(0,0,0, ${typography.opacity[style]});
  text-transform: ${typography.casing[style]};
`;

export const color = (color, style) => `
  color: rgba(${color}, ${typography.color[style]});
`;
