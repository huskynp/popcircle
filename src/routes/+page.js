import { page } from "$app/state";
import GeoTIFF, { fromArrayBuffer } from "geotiff";

const res = await fetch(page.url.pathname)
const data = await res.arrayBuffer();
const tiff = await fromArrayBuffer(data);
console.log(tiff);

