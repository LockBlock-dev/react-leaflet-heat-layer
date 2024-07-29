# react-leaflet-heat-layer [![npm version](https://img.shields.io/npm/v/react-leaflet-heat-layer.svg)](https://www.npmjs.com/package/react-leaflet-heat-layer)

-   React-leaflet v4 support
-   Typescript support

React-leaflet-heat-layer is a plugin for react-leaflet. A wrapper component of Leaflet.heat.

## Installation

-   Install [NodeJS](https://nodejs.org)
-   Run `react-leaflet-heat-layer`

## Prerequisites

Make sure that you haveve installed `react`, `react-leaflet` and `leaflet`.

## Example usage

```tsx
import { MapContainer } from "react-leaflet";
import HeatmapLayer from "react-leaflet-heat-layer";
import { addressPoints } from "./realworld";
import "leaflet/dist/leaflet.css";

const Demo = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13}>
            <HeatmapLayer latlngs={addressPoints.map((p) => [p[0], p[1]])} />
        </MapContainer>
    );
};
```

## Reference

See: https://leaflet.github.io/Leaflet.heat/#reference

## Copyright

See the [license](/LICENSE)
