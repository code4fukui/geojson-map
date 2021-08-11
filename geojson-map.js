import L from "https://code4sabae.github.io/leaflet-mjs/leaflet.mjs";

class GeoJSONMap extends HTMLElement {
  constructor () {
    super();
    this.init();
  }
  async init () {
    const getData = async () => {
      const fn = this.getAttribute("src");
      if (fn) {
        console.log(fn);
        const data = await (await fetch(fn)).json();
        return data;
      }
      const txt = this.textContent.trim();
      const data = JSON.parse(txt);
      this.textContent = "";
      return data;
    };
    const data = await getData();
    console.log(data);

    const grayscale = this.getAttribute("grayscale");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://code4sabae.github.io/leaflet-mjs/" + (grayscale ? "leaflet-grayscale.css" : "leaflet.css");
    this.appendChild(link);
    const waitOnload = async (comp) => {
      return new Promise(resolve => {
        comp.onload = resolve;
      });
    };
    await waitOnload(link);

    const div = document.createElement("div");
    this.appendChild(div);
    div.style.width = this.getAttribute("width") || "100%";
    div.style.height = this.getAttribute("height") || "60vh";

    const map = L.map(div);
    // set 国土地理院地図 https://maps.gsi.go.jp/development/ichiran.html
    L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png", {
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>"',
      maxZoom: 18,
    }).addTo(map);

    const opt = {
      /*
      style: () => {
        return {
            color: "#ff0000",
            opacity: 1,
            weight: 5,
        };
      },
      */
    };
    const layer = L.geoJson(data, opt).addTo(map);
    map.fitBounds(layer.getBounds());
  }
}

customElements.define("geojson-map", GeoJSONMap);
