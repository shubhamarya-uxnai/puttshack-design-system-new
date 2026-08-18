import { create } from 'storybook/theming'

/**
 * Storybook's own chrome — deliberately quiet and separate from the design
 * system's own tokens, so the surrounding UI never gets confused with what's
 * being demonstrated on the canvas.
 */
export const puttshackTheme = create({
  base: 'light',

  brandTitle: 'Puttshack Design System 2026',
  brandUrl: 'https://www.figma.com/design/x40IO8pltwoAFiVkBZEUzT/Puttshack-Design-System-2026',
  brandTarget: '_blank',

  colorPrimary: '#F45197',
  colorSecondary: '#00C1DE',

  appBg: '#f7f5f8',
  appContentBg: '#ffffff',
  appBorderColor: 'rgb(14 1 21 / 0.12)',
  appBorderRadius: 8,

  textColor: '#0E0115',
  textInverseColor: '#ffffff',
  textMutedColor: 'rgb(14 1 21 / 0.64)',

  barTextColor: 'rgb(14 1 21 / 0.64)',
  barSelectedColor: '#93358D',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: 'rgb(14 1 21 / 0.24)',
  inputTextColor: '#0E0115',
  inputBorderRadius: 6,

  fontBase: '"Ringside Regular Book", -apple-system, "Helvetica Neue", Arial, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, Menlo, monospace',
})
