import { BaseMap } from "../types";
import { COLORED_BY } from "../utils/debug/colors-map";

export const BASE_MAPS: BaseMap[] = [
  {
    id: "Dark",
    name: "Dark",
    mapUrl:
      "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  },
  {
    id: "Light",
    name: "Light",
    mapUrl:
      "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
  },
  { id: "Terrain", name: "Terrain", mapUrl: "" },
];

export const INITIAL_MAP_STYLE = BASE_MAPS[0].mapUrl;

export const CONTRAST_MAP_STYLES = {
  "https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json":
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json":
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json":
    "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
};

export const TILE_COLOR_MODES = {
  Original: COLORED_BY.ORIGINAL,
  "Random by tile": COLORED_BY.RANDOM,
  "By depth": COLORED_BY.DEPTH,
  "User selected": COLORED_BY.CUSTOM,
};

export const INITIAL_TILE_COLOR_MODE = COLORED_BY.ORIGINAL;

export const BOUNDING_VOLUME_COLOR_MODES = {
  White: COLORED_BY.ORIGINAL,
  "By tile": COLORED_BY.TILE,
};

export const INITIAL_BOUNDING_VOLUME_COLOR_MODE = COLORED_BY.ORIGINAL;

export const BOUNDING_VOLUME_WARNING_TYPE = "boundingVolume";
export const LOD_WARNING_TYPE = "lod";
export const PARENT_LOD_WARNING_TYPE = "parentLod";

export const BOUNDING_SPHERE = "Bounding Sphere";
export const ORIENTED_BOUNDING_BOX = "Oriented Bounding Box";

export const BOUNDING_VOLUME_TYPE = {
  MBS: BOUNDING_SPHERE,
  OBB: ORIENTED_BOUNDING_BOX,
};

export const BOUNDING_VOLUME_MESH_TYPE = {
  [BOUNDING_SPHERE]: "sphereMesh",
  [ORIENTED_BOUNDING_BOX]: "cubeMesh",
};

export const INITIAL_BOUNDING_VOLUME_TYPE = BOUNDING_VOLUME_TYPE.MBS;
