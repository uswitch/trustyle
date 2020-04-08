export default {
  "base": {
    "display": "flex",
    "flexFlow": "row",
    "userSelect": "none",
    "phase": {
      "base": {
        "flex": "1",
        "flexGrow": 0,
        "marginLeft": "5px",
        "background": "#E6F4FD",
        "borderRadius": "999px",
        "whiteSpace": "nowrap",
        "position": "relative",
        "transition": "flex-grow 0.4s",
        "&:first-child": {
          "marginLeft": "0px"
        }
      },
      "variants": {
        "open": {
          "variant": "funnelProgress.base.phase.base",
          "flexGrow": 1,
          "overflow": "hidden"
        }
      }
    },
    "phaseLabel": {
      "base": {
        "position": "relative",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
      }
    },
    "phaseLabelPart": {
      "base": {
        "display": "inline-block",
        "verticalAlign": "top",
        "marginLeft": "4px",
        "fontSize": "14px",
        "fontWeight": "bold",
        "lineHeight": "24px",
        "color": "#002396",
        "&:first-child": {
          "marginLeft": "0px"
        }
      }
    },
    "phaseIcon": {
      "base": {
        "transition": "background 0.4s, border-color 0.4s, color 0.4s",
        "background": "#FFFFFF",
        "border": "2px solid #B0B8BF",
        "borderRadius": "999px",
        "width": "20px",
        "height": "20px",
        "lineHeight": "20px",
        "textAlign": "center",
        "fontWeight": "bold",
        "color": "#B0B8BF",
        "fontSize": "14px"
      },
      "variants": {
        "open": {
          "variant": "funnelProgress.base.phaseIcon.base",
          "background": "#FFFFFF",
          "borderColor": "#A1E7FE",
          "color": "#008FE9"
        },
        "complete": {
          "variant": "funnelProgress.base.phaseIcon.base",
          "background": "#028EE9",
          "borderColor": "#028EE9"
        },
        "incomplete": {
          "variant": "funnelProgress.base.phaseIcon.base"
        }
      }
    },
    "phaseCompleteIcon": {
      "base": {
        "width": "12px",
        "display": "inline-block",
        "padding-top": "50%",
        "& > svg": {
          "margin-top": "-50%"
        }
      }
    },
    "progress": {
      "base": {
        "position": "absolute",
        "background": "#A1E7FE",
        "minWidth": "24px",
        "borderRadius": "999px",
        "top": "0",
        "bottom": "0",
        "left": "0",
        "transition": "width 0.4s"
      }
    }
  }
}