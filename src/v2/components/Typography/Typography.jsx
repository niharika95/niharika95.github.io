import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';

export const presentationTextStyles = [
  {
    name: 'H1 (bold)',
    variant: 'h1Bold',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Bold',
    fontSize: 52,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H1 (regular)',
    variant: 'h1Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 52,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H2 (medium)',
    variant: 'h2Medium',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Medium',
    fontSize: 44,
    letterSpacing: {
      unit: 'PERCENT',
      value: -3
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H2 (regular)',
    variant: 'h2Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 44,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H3 (medium)',
    variant: 'h3Medium',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Medium',
    fontSize: 36,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H3 (regular)',
    variant: 'h3Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 36,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H4 (regular)',
    variant: 'h4Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 32,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H5 (regular)',
    variant: 'h5Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 28,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H6 (medium)',
    variant: 'h6Medium',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Medium',
    fontSize: 24,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'H6 (regular)',
    variant: 'h6Regular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 24,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Body (semibold)',
    variant: 'bodySemibold',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'SemiBold',
    fontSize: 18,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Body (regular)',
    variant: 'bodyRegular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 18,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Body (light)',
    variant: 'bodyLight',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Light',
    fontSize: 18,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Small (regular)',
    variant: 'smallRegular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 15,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Small (light)',
    variant: 'smallLight',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Light',
    fontSize: 15,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Extra small (regular)',
    variant: 'extraSmallRegular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 12,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  },
  {
    name: 'Microcopy (regular)',
    variant: 'microcopyRegular',
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'Regular',
    fontSize: 10,
    letterSpacing: {
      unit: 'PERCENT',
      value: 0
    },
    textCase: 'ORIGINAL'
  }
];

const WEIGHT_VALUES = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700
};

const TEXT_CASE_VALUES = {
  ORIGINAL: 'none',
  UPPER: 'uppercase',
  LOWER: 'lowercase',
  TITLE: 'capitalize'
};

const DEFAULT_TAGS = {
  h1Bold: 'h1',
  h1Regular: 'h1',
  h2Medium: 'h2',
  h2Regular: 'h2',
  h3Medium: 'h3',
  h3Regular: 'h3',
  h4Regular: 'h4',
  h5Regular: 'h5',
  h6Medium: 'h6',
  h6Regular: 'h6',
  bodySemibold: 'p',
  bodyRegular: 'p',
  bodyLight: 'p',
  smallRegular: 'span',
  smallLight: 'span',
  extraSmallRegular: 'span',
  microcopyRegular: 'span'
};

const lineHeightForVariant = (variant) => {
  if (variant.startsWith('h')) return 1.2;
  if (variant === 'microcopyRegular') return 1.4;
  if (variant === 'extraSmallRegular' || variant.startsWith('small')) return 1.5;
  return 1.8;
};

const toLetterSpacing = ({ unit, value }) => {
  if (unit === 'PERCENT') return `${value / 100}em`;
  if (unit === 'PIXELS') return `${value}px`;
  return undefined;
};

export const typographyStyles = presentationTextStyles.reduce((styles, textStyle) => {
  styles[textStyle.variant] = {
    '--typography-font-family': `"${textStyle.fontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
    '--typography-font-size': `${textStyle.fontSize}px`,
    '--typography-font-weight': WEIGHT_VALUES[textStyle.fontWeight],
    '--typography-letter-spacing': toLetterSpacing(textStyle.letterSpacing),
    '--typography-line-height': lineHeightForVariant(textStyle.variant),
    '--typography-text-transform': TEXT_CASE_VALUES[textStyle.textCase] || 'none'
  };
  return styles;
}, {});

export const typographyVariants = presentationTextStyles.map(({ variant }) => variant);

export default function Typography({
  as,
  children,
  className = '',
  variant = 'bodyRegular',
  style = {},
  ...props
}) {
  const Component = as || DEFAULT_TAGS[variant] || 'span';
  const variantStyle = typographyStyles[variant] || typographyStyles.bodyRegular;

  return (
    <Component
      className={`typography typography-${variant} ${className}`.trim()}
      style={{ ...variantStyle, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}

Typography.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(typographyVariants),
  style: PropTypes.object
};
