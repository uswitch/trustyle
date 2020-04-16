export default {
  "base": {
    "boxSizing": "border-box",
    "paddingX": "lg",
    "textAlign": "center",
    "fontWeight": "bold"
  },
  "variants": {
    "primary": {
      "variant": "buttons.base",
      "backgroundColor": "uswitch-navy",
      "color": "white",
      "width": [
        "100%"
      ],
      "border": "none",
      ":hover": {
        "backgroundColor": "grey-70"
      },
      ":disabled": {
        "backgroundColor": "grey-20",
        "cursor": "not-allowed"
      },
      ":visited": {
        "color": "white"
      }
    },
    "secondary": {
      "variant": "buttons.base",
      "color": "uswitch-navy",
      "background": "none",
      "border": "2px solid",
      "borderColor": "uswitch-navy",
      ":hover": {
        "backgroundColor": "grey-10"
      },
      ":disabled": {
        "color": "grey-40",
        "borderColor": "grey-20",
        "cursor": "not-allowed"
      },
      ":visited": {
        "color": "uswitch-navy"
      }
    },
    "reversed": {
      "variant": "buttons.base",
      "color": "white",
      "backgroundColor": "uswitch-navy",
      "border": "2px solid",
      "borderColor": "white",
      ":hover": {
        "backgroundColor": "grey-80"
      },
      ":disabled": {
        "borderColor": "grey-60",
        "color": "grey-60",
        "cursor": "not-allowed"
      },
      ":visited": {
        "color": "white"
      }
    },
    "link": {
      "variant": "buttons.base",
      "color": "uswitch-navy",
      "background": "none",
      "textDecoration": "underline"
    },
    "inverse": {
      "variant": "buttons.base",
      "color": "uswitch-navy",
      "backgroundColor": "white",
      "border": "2px solid",
      "borderColor": "uswitch-navy",
      ":hover": {
        "backgroundColor": "grey-100"
      },
      ":disabled": {
        "borderColor": "grey-60",
        "color": "grey-60",
        "cursor": "not-allowed"
      },
      ":visited": {
        "color": "uswitch-navy"
      }
    }
  }
}