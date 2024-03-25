export type OtherPropsThemeModel = {
 fonts: Fonts;
 fontSizes: FontSizes;
 fontWeights: FontWeights;
 lineHeights: LineHeights;
 space: Sizes;
 sizes: Sizes;
 borderWidths: BorderWidths;
 styles: Styles;
};

export type BorderWidths = {
 'border-default': number;
 'border-big': number;
};

export type Borders = {
 default: string;
 primary: string;
 buttons: BordersButtons;
 popover: Popover;
};

export type BordersButtons = {
 secondary: string;
 secondaryHover: string;
};

export type Popover = {
 primary: string;
};

export type Colors = {
 heading?: string;
 text?: string;
 white?: string;
 buttons?: ColorsButtons;
 text100?: string;
 background: string;
 inputCaretColor: string;
 info: { [key: string]: string };
 success: { [key: string]: string };
 error: { [key: string]: string };
 warning: { [key: string]: string };
 primary: { [key: string]: string };
};

export type ColorsButtons = {
 primary: Primary;
 secondary: Secondary;
};

export type Primary = {
 border: string;
 color: string;
 background: string;
 hover: string;
 active: string;
 focus: string;
};

export type Secondary = {
 color: string;
 background: string;
};

export type FontSizes = {
 [key: string]: number;
};

export type FontWeights = {
 light: number;
 regular: number;
 semi: number;
 bold: number;
};

export type Fonts = {
 body: string;
 heading: string;
 monospace: string;
};

export type LineHeights = {
 body: number;
 heading: number;
};

export type Sizes = {
 [key: string]: number;
};

export type Styles = {
 root: Root;
};

export type Root = {
 fontFamily: string;
 fontWeight: string;
 lineHeight: string;
};
export type ColorThemeModel = {
 colors: Colors;
};
export type ThemeModel = OtherPropsThemeModel & ColorThemeModel;
