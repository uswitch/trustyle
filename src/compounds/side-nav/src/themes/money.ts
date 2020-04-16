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
      "padding": "8px 0 8px 35px",
      "mb": 0,
      "position": "relative",
      "::after": {
        "content": "\"\"",
        "position": "absolute",
        "top": "45%",
        "transform": "translateY(-50%)",
        "display": "block",
        "width": 12,
        "height": 12,
        "left": 6,
        "borderRadius": 12,
        "backgroundColor": "white",
        "borderWidth": 2,
        "borderStyle": "solid",
        "borderColor": "grey-30"
      },
      "::before": {
        "content": "\"\"",
        "position": "absolute",
        "left": 13,
        "width": 2,
        "backgroundColor": "grey-30",
        "top": "0",
        "height": "100%"
      },
      ":first-child::before": {
        "top": "50%",
        "height": "50%"
      },
      ":last-child::before": {
        "height": "50%"
      },
      ">a": {
        "color": "grey-60",
        "textDecoration": "none",
        "fontSize": "xs",
        "marginTop": "-4px",
        "display": "block",
        ":visited": {
          "color": "grey-60"
        }
      }
    },
    "isActive": {
      "variant": "sideNav.internalLinkListItem.base",
      "color": "experimental-text",
      "::after": {
        "variant": "sideNav.internalLinkListItem.base.::after",
        "borderColor": "fuschia"
      },
      ">a": {
        "variant": "sideNav.internalLinkListItem.base.>a",
        "color": "experimental-text",
        "fontWeight": "bold",
        ":visited": {
          "color": "experimental-text"
        }
      }
    }
  },
  "additionalLink": {
    "display": "block",
    "color": "grey-80",
    "paddingTop": "xs",
    "paddingBottom": "xs",
    "paddingLeft": "0",
    "borderWidth": "1px 0 0 0",
    "borderStyle": "solid",
    "borderColor": "grey-20",
    "fontSize": "xs",
    "a": {
      "textDecoration": "none"
    },
    ":last-child": {
      "paddingBottom": "0"
    }
  }
}