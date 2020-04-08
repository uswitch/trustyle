export default {
  "frozen": {
    "backgroundColor": "grey-10",
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
    "inputColor": "#008fe9",
    "borderColor": "#b0b8bf",
    "borderRadius": "3px",
    "borderStyle": "solid",
    "borderWidth": "1px",
    "color": "slate-grey",
    "fontWeight": "normal",
    "before": {
      "content": "' '",
      "borderColor": "#b0b8bf",
      "borderStyle": "solid",
      "borderWidth": "2px"
    }
  }
}