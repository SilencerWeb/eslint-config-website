const css = String.raw;


export const breakpoints = {
  up: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
  },
  down: {
    xs: '575.98px',
    sm: '767.98px',
    md: '991.98px',
    lg: '1199.98px',
  },
};

export const media = {
  up: {
    xs: (styles) => css`
      @media (min-width: ${breakpoints.up.xs}) {
        ${styles};
      }
    `,
    sm: (styles) => css`
      @media (min-width: ${breakpoints.up.sm}) {
        ${styles};
      }
    `,
    md: (styles) => css`
      @media (min-width: ${breakpoints.up.md}) {
        ${styles};
      }
    `,
    lg: (styles) => css`
      @media (min-width: ${breakpoints.up.lg}) {
        ${styles};
      }
    `,
  },
  down: {
    xs: (styles) => css`
      @media (max-width: ${breakpoints.down.xs}) {
        ${styles};
      }
    `,
    sm: (styles) => css`
      @media (max-width: ${breakpoints.down.sm}) {
        ${styles};
      }
    `,
    md: (styles) => css`
      @media (max-width: ${breakpoints.down.md}) {
        ${styles};
      }
    `,
    lg: (styles) => css`
      @media (max-width: ${breakpoints.down.lg}) {
        ${styles};
      }
    `,
  },
};
