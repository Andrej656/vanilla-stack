// Based on Shopify Polaris Colors
// https://polaris.shopify.com/design/colors

// Variants share a naming pattern: UI element / Color role / State
// Apply on-surface colors to elements that appear on surfaces.

export const color = {
  background: "#f6f6f7",
  surface: "#ffffff",
  surfaceSubdued: "#fafbfb",
  onSurface: "#111213",

  text: "#202223",
  textSubdued: "#6e7175",
  textOnDark: "#f6f6f7",

  border: "#8d9196",
  divider: "#e1e3e5",
  dividerDark: "#454749",

  primary: "#008060",
  textOnPrimary: "#ffffff",
  secondary: "#cccccc",
  textOnSecondary: "#202223",
  interactive: "#2d72d2",
  textOnInteractive: "#ffffff",
  decorative: "#c9cccf",
} as const;

// Material Design 2 Breakpoint system
// https://material.io/design/layout/responsive-layout-grid.html#breakpoints

export const screen = {
  xs: "480",
  s: "600",
  m: "905",
  l: "1240",
  xl: "1440",
} as const;

// Material Design 3 – Typography styles
// https://m3.material.io/styles/typography/applying-type#469b978d-e7aa-4915-84b9-9b84cfee3a05

export const type = {
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },
  lineHeight: {
    base: "1.5",
    label: "1.0",
    headline: "1.2",
    tight: "1.25",
    loose: "2",
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.02em",
  },
} as const;

// Material Design 3 – Elevation
// https://m3.material.io/styles/elevation/tokens

export const depth = {
  0: "0",
  1: "10",
  2: "30",
  3: "60",
  4: "80",
  5: "120",
} as const;

// Shopify Polaris Shadow tokens
// https://polaris.shopify.com/tokens/shadow

export const shadow = {
  inset: {
    l: "inset 0rem 0rem 0.4375rem 0.125rem rgba(31, 33, 36, 0.18)",
    m: "inset 0rem 0.125rem 0.25rem rgba(31, 33, 36, 0.32)",
    s: "inset 0rem 0rem 0.1875rem rgba(31, 33, 36, 0.56)",
  },
  none: "none",
  xs: "0rem 0rem 0.125rem rgba(31, 33, 36, 0.24)",
  s: "0rem 0.0625rem 0.0625rem rgba(31, 33, 36, 0.1)",
  m: "0rem 0.125rem 0.25rem rgba(31, 33, 36, 0.1), 0rem 0.0625rem 0.375rem rgba(31, 33, 36, 0.05)",
  l: "0rem 0.25rem 0.75rem rgba(31, 33, 36, 0.2), 0rem 0.125rem 0.375rem rgba(31, 33, 36, 0.05)",
  xl: "0rem 0.25rem 1.125rem -0.125rem rgba(31, 33, 36, 0.08), 0rem 0.75rem 1.125rem -0.125rem rgba(31, 33, 36, 0.15)",
  "2xl":
    "0rem 2rem 2rem rgba(31, 33, 36, 0.15), 0rem 2rem 3.5rem -0.125rem rgba(31, 33, 36, 0.16)",
} as const;

// Material Design – Motion easing and duration
// https://m3.material.io/styles/motion/easing-and-duration/tokens-specs

export const motion = {
  duration: {
    short1: "50ms",
    short2: "100ms",
    short3: "150ms",
    short4: "200ms",
    medium1: "250ms",
    medium2: "300ms",
    medium3: "350ms",
    medium4: "400ms",
    long1: "450ms",
    long2: "500ms",
    long3: "550ms",
    long4: "600ms",
    extraLong1: "700ms",
    extraLong2: "800ms",
    extraLong3: "900ms",
    extraLong4: "1000ms",
  },
  easing: {
    linear: "cubic-bezier(0, 0, 1, 1)",
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
    standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
    emphasized: "cubic-bezier(0.2, 0, 0, 1)",
    emphasizedAccelerate: "cubic-bezier(0.3, 0, 0.8, 0.15)",
    emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
  },
} as const;

// Shopify Polaris – Shape tokens
// https://polaris.shopify.com/tokens/shape

export const shape = {
  borderRadius: {
    xs: "0.125rem",
    s: "0.25rem",
    m: "0.5rem",
    l: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    none: "0",
    half: "50%",
    full: "625rem", // 10000px
  },
  borderWidth: {
    0: "0",
    1: "0.0625rem",
    2: "0.125rem",
    3: "0.1875rem",
    4: "0.25rem",
    5: "0.3125rem",
  },
} as const;

// Material Design 3 – Interaction states
// https://m3.material.io/foundations/interaction-states

export const state = {
  layerOpacity: {
    disabled: {
      content: "0.38",
      container: "0.12",
    },
    hover: "0.08",
    focus: "0.12",
    pressed: "0.12",
    dragged: "0.16",
  },
} as const;
