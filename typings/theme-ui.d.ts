/**
 * THIS FILE IS TEMPORARY (hopefully) until this is merged:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/41567
 */

import { Theme } from 'theme-ui'
import { Interpolation, SerializedStyles } from '@emotion/serialize'

declare module 'theme-ui' {
  export function css(
    styleObject: Interpolation
  ): (theme: Theme) => SerializedStyles
}
