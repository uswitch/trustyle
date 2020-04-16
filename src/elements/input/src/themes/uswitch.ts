export default {
  "frozen": {
    "backgroundColor": "frozen-bg",
    "borderRadius": "3px"
  },
  "radio": {
    "base": {
      "&:checked + span": {
        "borderColor": "black",
        "color": "black",
        "&::before": {
          "backgroundColor": "black",
          "borderColor": "black",
          "boxShadow": "inset 0 0 0 2px #fff"
        }
      },
      "&:focus + span": {
        "borderColor": "black"
      }
    },
    "label": {
      "borderColor": "black",
      "borderStyle": "solid",
      "borderWidth": "2px",
      "color": "grey-80",
      "fontWeight": "normal",
      "&:before": {
        "borderColor": "black",
        "borderRadius": "50%",
        "borderStyle": "solid",
        "borderWidth": "2px"
      }
    }
  },
  "tile": {
    "inputColor": "#141424",
    "borderColor": "light-grey-blue",
    "borderStyle": "solid",
    "borderWidth": "2px",
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