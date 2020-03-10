import { DynamicStyle } from 'facepaint';
export declare const container: (outerMargin?: string[], containerWidths?: (string | number)[], gutterWidths?: number[]) => DynamicStyle[];
export declare const row: (centerX?: boolean, topSpacing?: number[], bottomSpacing?: number[], gutterWidths?: number[]) => DynamicStyle[];
export declare const column: (sizes?: number[], display?: string[], hasPaddingTop?: boolean, hasPaddingBottom?: boolean, gutterWidths?: number[]) => DynamicStyle[];
