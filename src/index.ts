import {
    createElementObject,
    createTileLayerComponent,
    updateGridLayer,
    type LayerProps,
    type LeafletContextInterface,
} from "@react-leaflet/core";
import L, { HeatLatLngTuple, LatLng } from "leaflet";
import "leaflet.heat";

interface HeatLayerProps extends L.HeatMapOptions {
    latlngs: Array<LatLng | HeatLatLngTuple>;
}

const createHeatLayer = (
    { latlngs, ...options }: HeatLayerProps,
    context: LeafletContextInterface
) => {
    const layer = L.heatLayer(latlngs, options);
    return createElementObject(layer, context);
};

export default createTileLayerComponent<
    L.GridLayer,
    LayerProps & HeatLayerProps
>(createHeatLayer, updateGridLayer);
