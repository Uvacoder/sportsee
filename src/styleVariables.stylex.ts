import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  primary: "#FF0101",
  primaryContrast: "rgba(255, 0, 0, 0.0661)",
  blue: "#4AB8FF",
  blueContrast: "rgba(74, 184, 255, 0.1)",
  yellow: "#FDCC0C",
  yellowContrast: "rgba(249, 206, 35, 0.1)",
  pink: "#FD5181",
  pinkContrast: "rgba(253, 81, 129, 0.1)",
  background: "white",
  lightBlack: "#1F1F1F",
});

export const typography = stylex.defineVars({
  /**
   * 12px
   */
  sm: "12px",
  /**
   * 16px
   */
  md: "16px",
  /**
   * 24px
   */
  lg: "24px",
  /**
   * 32px
   */
  xl: "32px",
  /**
   * 40px
   */
  xxl: "40px",
  /**
   * 16px
   */
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.5",
});

export const spacing = stylex.defineVars({
  /**
   * 4px
   */
  xs: "4px",
  /**
   * 8px
   */
  sm: "8px",
  /**
   * 16px
   */
  md: "16px",
  /**
   * 24px
   */
  lg: "24px",
  /**
   * 32px
   */
  xl: "32px",
  /**
   * 40px
   */
  xxl: "40px",
});
