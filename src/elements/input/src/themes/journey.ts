export default {
  "frozen": {
    "backgroundColor": "frozen-bg",
    "borderRadius": "3px"
  },
  "radio": {
    "base": {
      "&:checked + span": {
        "borderColor": "azure",
        "boxShadow": "linkInset",
        "color": "black",
        "&::before": {
          "backgroundColor": "azure",
          "borderColor": "azure",
          "boxShadow": "inset 0 0 0 2px #fff"
        }
      },
      "&:focus + span": {
        "boxShadow": "linkInset"
      }
    },
    "label": {
      "borderColor": "light-grey-blue",
      "borderRadius": "3px",
      "borderStyle": "solid",
      "borderWidth": "1px",
      "color": "slate-grey",
      "fontWeight": "normal",
      "padding": "14px 12px 16px 0",
      "&:before": {
        "borderColor": "light-grey-blue",
        "borderRadius": "50%",
        "borderStyle": "solid",
        "borderWidth": "2px"
      }
    }
  },
  "tile": {
    "inputColor": "#008fe9",
    "borderColor": "light-grey-blue",
    "borderRadius": "3px",
    "borderStyle": "solid",
    "borderWidth": "1px",
    "color": "slate-grey",
    "fontWeight": "normal",
    "before": {
      "content": "' '",
      "borderColor": "light-grey-blue",
      "borderStyle": "solid",
      "borderWidth": "2px"
    }
  }
}