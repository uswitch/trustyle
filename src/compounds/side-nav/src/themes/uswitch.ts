export default {
  "internalLinkList": {
    "listStyle": "none",
    "paddingLeft": 0,
    "paddingTop": "xxs",
    "paddingBottom": "xxs",
    "margin": 0
  },
  "internalLinkListItem": {
    "base": {
      "mb": 0,
      "position": "relative",
      ">a": {
        "display": "block",
        "color": "grey-70",
        "textDecoration": "none",
        "fontSize": "sm",
        "padding": "12px 16px",
        ":visited": {
          "color": "grey-70"
        }
      }
    },
    "isActive": {
      "variant": "sideNav.internalLinkListItem.base",
      "color": "uswitch-navy",
      "::after": {
        "variant": "sideNav.internalLinkListItem.base.::after",
        "content": "\"\"",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "display": "block",
        "width": 4,
        "height": "100%",
        "backgroundColor": "uswitch-navy"
      },
      ">a": {
        "variant": "sideNav.internalLinkListItem.base.>a",
        "color": "uswitch-navy",
        ":visited": {
          "color": "uswitch-navy"
        }
      }
    }
  },
  "additionalLink": {
    "display": "block",
    "marginBottom": "xxs",
    "color": "grey-80",
    "paddingTop": "xxs",
    "paddingBottom": "xxs",
    "textDecoration": "none"
  }
}