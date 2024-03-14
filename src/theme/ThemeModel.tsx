export type ThemeModel = {
 colors?: Colors;
 fonts?: Fonts;
 fontSizes?: FontSizes;
 fontWeights?: FontWeights;
 lineHeights?: LineHeights;
 space?: Sizes;
 sizes?: Sizes;
 borders?: Borders;
 borderWidths?: BorderWidths;
 styles?: Styles;
};

export type BorderWidths = {
 'border-default'?: number;
 'border-big'?: number;
};

export type Borders = {
 default?: string;
 primary?: string;
 buttons?: BordersButtons;
 popover?: Popover;
};

export type BordersButtons = {
 secondary?: string;
 secondaryHover?: string;
};

export type Popover = {
 primary?: string;
};

export type Colors = {
 heading?: string;
 text?: string;
 white?: string;
 buttons?: ColorsButtons;
 text100?: string;
 background?: string;
 inputCaretColor?: string;
 tag?: string;
 info?: { [key: string]: string };
 success?: { [key: string]: string };
 error?: { [key: string]: string };
 warning?: { [key: string]: string };
 notificationDot?: string;
 primary?: { [key: string]: string };
};

export type ColorsButtons = {
 primary?: Primary;
 secondary?: Secondary;
};

export type Primary = {
 border?: string;
 color?: string;
 background?: string;
 hover?: string;
 active?: string;
 focus?: string;
};

export type Secondary = {
 color?: string;
 background?: string;
};

export type FontSizes = {
 '12'?: number;
 '14'?: number;
 '16'?: number;
 '18'?: number;
 '96'?: number;
 'x-small'?: number;
 small?: number;
 default?: number;
 text?: number;
};

export type FontWeights = {
 light?: number;
 regular?: number;
 semi?: number;
 bold?: number;
};

export type Fonts = {
 body?: string;
 heading?: string;
 monospace?: string;
};

export type LineHeights = {
 body?: number;
 heading?: number;
};

export type Sizes = {
 '0'?: number;
 '2'?: number;
 '4'?: number;
 '8'?: number;
 '10'?: number;
 '12'?: number;
 '14'?: number;
 '-0'?: number;
 '-2'?: number;
 '-4'?: number;
 '-8'?: number;
 '-10'?: number;
 '-12'?: number;
 '-14'?: number;
 small?: number;
 '-small'?: number;
};

export type Styles = {
 root?: Root;
};

export type Root = {
 fontFamily?: string;
 fontWeight?: string;
 lineHeight?: string;
};
