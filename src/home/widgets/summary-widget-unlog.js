import React from "react";

const widgetOptions = {
  "colorTheme": "light",
  "dateRange": "12M",
  "showChart": true,
  "locale": "en",
  "width": "100%",
  "height": "100%",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": true,
  "showFloatingTooltip": false,
  "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
  "plotLineColorFalling": "rgba(41, 98, 255, 1)",
  "gridLineColor": "rgba(42, 46, 57, 0)",
  "scaleFontColor": "rgba(106, 109, 120, 1)",
  "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
  "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
  "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
  "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
  "tabs": [
    {
      "title": "Live",
      "symbols": [
        {
          "s": "BINANCE:DOGEUSD",
          "d": "Dogecoin"
        }
      ],
      "originalTitle": "Live"
    }
  ]
};
export default class UnLogSummary extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }


  componentDidMount() {
    const container = this._ref.current;

    // Check if script tag already exists
    let script = container.querySelector('script');
    if (!script) {
      // If it doesn't exist, create a new script tag
      script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
      script.async = true;
      container.appendChild(script);
    }

    // Update the script tag's innerHTML
    script.innerHTML = JSON.stringify(widgetOptions);
  }

  render() {
    return(
        <div class="tradingview-widget-container" ref={this._ref}>
          <div class="tradingview-widget-container__widget"></div>
        </div>
    );
  }

}

