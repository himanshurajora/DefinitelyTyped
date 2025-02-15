// Type definitions for qr-image 3.2
// Project: https://github.com/alexeyten/qr-image
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * error correction level. One of L, M, Q, H. Default M.
 */
export type ec_level = 'L' | 'M' | 'Q' | 'H';

/** @default 'png' */
export type image_type = 'png' | 'svg' | 'pdf' | 'eps';

export interface Bitmap {
    /**
     * width (and height) of resulting image in pixels
     */
    size: number;
    /**
     * @summary
     * Buffer with image data. It's a linear representation
     * of image in format:
     *
     * @example
     * <00> <xx> <xx> ..        <xx>
     * <00> <xx> <xx> ..        <xx>
     * ..
     * <00> <xx> <xx> ..        <xx>
     * ^    | size number of bytes |
     * \ do not modify. Must be 00
     *
     * @description
     * Each `<xx>` is a pixel of image.
     * It's value `0` — black, `255` — white, everything between are shades of gray.
     */
    data: Buffer;
}

export interface SvgObject {
    size: number;
    path: string;
}

export interface Options {
    // error correction level. One of L, M, Q, H. Default M.
    ec_level?: ec_level | undefined;
    // image type. Possible values png(default), svg, pdf and eps.
    type?: image_type | undefined;
    // (png and svg only) for png and undefined for svg.-(png and svg only) — size of one module in pixels.
    size?: number | undefined;
    // (only png)for png and 1 for others.-white space around QR image in modules.
    margin?: number | undefined;
    // (experimental, default false) try to optimize QR-code for URLs.
    parse_url?: boolean | undefined;
    /**
     * (only png) — function to customize qr bitmap before encoding to PNG
     */
    customize?: ((bitmap: Bitmap) => void) | undefined;
}

export function image(text: string, level?: ec_level): NodeJS.ReadableStream;
export function image(text: string, options?: Options): NodeJS.ReadableStream;

export function imageSync(text: string, level?: ec_level): Buffer;
export function imageSync(text: string, options?: Options): string | Buffer;

export function svgObject(text: string, level?: ec_level): SvgObject;
export function svgObject(text: string, options?: Options): SvgObject;

export function matrix(text: string, level?: ec_level): any[][];
