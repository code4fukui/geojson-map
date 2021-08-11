# geojson-map

https://code4fukui.github.io/geojson-map/

## usage

1. inline

```html
<script type="module" src="https://code4fukui.github.io/geojson-map/geojson-map.js"></script>
<geojson-map>
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "あいうえお",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 3,
        "_fillColor": "#ff0000",
        "_fillOpacity": 0.5
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              136.192767,
              35.908993
            ],
            [
              136.193453,
              35.908446
            ],
            [
              136.192563,
              35.907255
            ],
            [
              136.191533,
              35.907637
            ],
            [
              136.191908,
              35.909436
            ],
            [
              136.192767,
              35.908993
            ]
          ]
        ]
      }
    }
  ]
}
</geojson-map>
```

2. src

```html
<script type="module" src="https://code4fukui.github.io/geojson-map/geojson-map.js"></script>
<geojson-map src="https://code4fukui.github.io/kunitaka/schoolzone.geojson"></geojson-map>
```
