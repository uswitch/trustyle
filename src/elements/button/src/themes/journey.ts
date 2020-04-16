export default {
  "base": {
    "box-sizing": "border-box",
    "backgroundColor": "primary",
    "color": "light-1",
    "textAlign": "center",
    "width": [
      "100%"
    ],
    "border": "none",
    "fontWeight": "bold",
    "borderRadius": "sm",
    ":hover": {
      "backgroundColor": "primary-hover",
      "boxShadow": "inset 0 0 0 1px ${color}",
      "color": "light-1"
    },
    ":disabled": {
      "backgroundColor": "primary",
      "opacity": "0.6",
      "cursor": "not-allowed"
    },
    ":visited": {
      "color": "light-1"
    }
  },
  "variants": {
    "primary": {
      "variant": "buttons.base"
    },
    "continue": {
      "variant": "buttons.base",
      "color": "link-2",
      "backgroundColor": "light-blue",
      ":hover": {
        "backgroundColor": "secondary-hover",
        "color": "link-2"
      },
      ":disabled": {
        "backgroundColor": "light-blue",
        "opacity": "0.6",
        "cursor": "not-allowed"
      },
      ":visited": {
        "color": "link-2"
      }
    },
    "secondary": {
      "variant": "buttons.base",
      "color": "black",
      "backgroundColor": "light-1",
      "border": "1px solid",
      "borderColor": "light-grey-blue",
      ":hover": {
        "backgroundColor": "light-1",
        "borderColor": "link",
        "boxShadow": "linkInset",
        "color": "black"
      },
      ":disabled": {
        "borderColor": "light-grey-blue",
        "opacity": "0.6",
        "cursor": "not-allowed",
        "boxShadow": "none"
      },
      ":visited": {
        "color": "black"
      }
    }
  }
}