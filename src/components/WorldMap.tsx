// components/SimpleMap.tsx
import React from "react";

interface Feature {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
  properties: {
    id: string;
  };
}

interface GeoJSON {
  type: "FeatureCollection";
  features: Feature[];
}

interface SimpleMapProps {
  geoJson: GeoJSON | null;
  width: number;
  height: number;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ geoJson, width, height }) => {
  if (!geoJson) {
    return <div>Loading map data...</div>;
  }

  const features = geoJson.features;

  // Scale and translate the coordinates for display within the SVG
  const scale = 0.8; // Adjust for desired zoom level
  const translateX = 50;
  const translateY = 50;

  return (
    <svg width={width} height={height}>
      {features.map((feature, index) => {
        const coordinates = feature.geometry.coordinates[0]; // Get outer ring

        // Transform the coordinates to fit within the SVG
        const points = coordinates
          .map(
            ([x, y]) => `${x * scale + translateX},${y * scale + translateY}`
          )
          .join(" ");

        return (
          <polygon
            key={feature.properties.id}
            points={points}
            fill="lightblue"
            stroke="black"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
};

export default SimpleMap;
