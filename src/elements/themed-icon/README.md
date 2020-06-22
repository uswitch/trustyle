# themed-icon

> themed-icon is an icon component that both supports being styled with theme-ui and using different icons per theme.

## Installation

```
npm install --save @uswitch/trustyle.themed-icon
```

## Usage

To add an icon, just drag it into the relevant directory in the `icons` directory and webpack will handle the rest.

For example, the directory structure for the below examples could look like this:

```
$TRUSTYLE/src/elements/themed-icon/src
└── icons
    ├── money
    │   ├── caret.svg
    │   ├── dollar.svg
    │   └── pound.svg
    └── uswitch
        ├── car.svg
        └── caret.svg
```

To get single-theme icons:

```js
import ThemedIcon, { addIcons } from '@uswitch/trustyle.themed-icon'
import { dollarIcon } from '@uswitch/trustyle.themed-icon/theme/money'

addIcons(dollarIcon)

return <ThemedIcon icon="dollar" sx={{ color: 'grey-80' }} />
```

To get multi-theme icons:

```js
import ThemedIcon, { addIcons } from '@uswitch/trustyle.themed-icon'
import caretIcon from '@uswitch/trustyle.themed-icon/icon/caret'

addIcons(caretIcon)

return <ThemedIcon icon="caret" sx={{ color: 'grey-80' }} />
```

To get all icons for a theme:

```js
import ThemedIcon, { addIcons } from '@uswitch/trustyle.themed-icon'
import * as moneyIcons from '@uswitch/trustyle.themed-icon/theme/money'

addIcons(moneyIcons)

return <ThemedIcon icon={iconFromContentful} sx={{ color: 'grey-80' }} />
```

## Considerations

- What about icons from Contentful?
- How do we avoid bundling more icons than needed?
- Can we split the SVGs out into an external .svg file to avoid increasing the bundle size?
