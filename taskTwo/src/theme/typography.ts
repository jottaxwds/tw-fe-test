import spacing from "./spacing";

const fontFamily = {
  default: "Raleway",
  headings: "DMSerifDisplay",
  cta: "Fredoka",
} as const;

const fontWeight = {
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
} as const;

const fontSize = {
  xxSmall: "0.8rem",
  xSmall: "1rem",
  small: "1.2rem",
  normal: "1.4rem",
  large: "1.6rem",
  xLarge: "1.8rem",
  xxLarge: "3.0rem",
} as const;

const typography = {
  fontFamily,
  fontWeight,
  fontSize,
} as const;

const elements = {
  heading: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.headings,
      fontSize: typography.fontSize.xxLarge,
      fontWeight: typography.fontWeight.bold,
      marginBottom: spacing.mediumLarge,
    } as const,
    "name",
    {
      enumerable: false,
      value: "Main Page Heading",
    }
  ),
  subHeading: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.cta,
      fontSize: typography.fontSize.xSmall,
      fontWeight: typography.fontWeight.regular,
      marginBottom: spacing.mediumLarge,
    } as const,
    "name",
    {
      enumerable: false,
      value: "Main Page SubHeading",
    }
  ),
  sectionHeading: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.headings,
      fontSize: typography.fontSize.normal,
      fontWeight: typography.fontWeight.semiBold,
    } as const,
    "name",
    {
      enumerable: false,
      value: "Section Headings",
    }
  ),
  detailsHeading: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.headings,
      fontSize: typography.fontSize.xLarge,
      fontWeight: typography.fontWeight.regular,
    } as const,
    "name",
    {
      enumerable: false,
      value: "Section Headings",
    }
  ),
  smallHeadings: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.headings,
      fontSize: typography.fontSize.xSmall,
      fontWeight: typography.fontWeight.regular,
    } as const,
    "name",
    {
      enumerable: false,
      value: "List Headers",
    }
  ),
  text: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.default,
      fontSize: typography.fontSize.xSmall,
      fontWeight: typography.fontWeight.regular,
    } as const,
    "name",
    {
      enumerable: false,
      value: "Body Text",
    }
  ),
  cta: Object.defineProperty(
    {
      fontFamily: typography.fontFamily.cta,
      fontSize: typography.fontSize.xSmall,
      fontWeight: typography.fontWeight.regular,
    } as const,
    "name",
    {
      enumerable: false,
      value: "CTA in general",
    }
  ),
};

export default {
  ...typography,
  ...elements,
} as const;
