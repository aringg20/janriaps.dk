import { Property } from 'csstype';
import { DefaultTheme } from 'styled-components';
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ResponsiveValue, SpaceProps, TypographyProps, TLengthStyledSystem, Theme as StyledSystemTheme } from 'styled-system';
export declare type Value = TLengthStyledSystem;
export declare type ResponsiveProp = ResponsiveValue<TLengthStyledSystem>;
export interface BoxProps extends BackgroundProps, BorderProps, Omit<ColorProps, 'color'>, FlexboxProps, GridProps, LayoutProps, PositionProps, SpaceProps, TypographyProps {
    spaceX?: ResponsiveProp;
    sx?: ResponsiveProp;
    spaceY?: ResponsiveProp;
    sy?: ResponsiveProp;
    textColor?: ResponsiveValue<Property.Color>;
}
export interface ThemedBox extends BoxProps {
    theme: DefaultTheme & StyledSystemTheme & {
        grid: {
            columns: number;
            columnGap: ResponsiveProp;
            maxWidth: ResponsiveProp;
            margins: ResponsiveProp;
        };
    };
}
export interface ColProps extends ThemedBox {
    span?: ResponsiveProp;
    push?: ResponsiveProp;
    pull?: ResponsiveProp;
    offset?: ResponsiveProp;
}
//# sourceMappingURL=types.d.ts.map