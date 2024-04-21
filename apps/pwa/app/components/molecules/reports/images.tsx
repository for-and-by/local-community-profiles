import { useMapImages } from "~/hooks/map/use-map-images";

export function MapImages() {
  useMapImages([
    {
      id: "ecological",
      url: "/pins/ecological.png",
    },
    {
      id: "roads",
      url: "/pins/roads.png",
    },
    {
      id: "accessibility",
      url: "/pins/accessibility.png",
    },
    {
      id: "arts",
      url: "/pins/arts.png",
    },
    {
      id: "housing",
      url: "/pins/housing.png",
    },
    {
      id: "other",
      url: "/pins/other.png",
    },
  ]);

  return null;
}
