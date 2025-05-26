import React, { useState } from "react";

const DistanceMatrix = ({ apiKey }) => {
  const [places, setPlaces] = useState([]);
  const [distanceMatrix, setDistanceMatrix] = useState([]);
  const [shortestPaths, setShortestPaths] = useState([]);

  const fetchDistanceMatrix = async () => {
    const origins = places.join("|");
    const destinations = places.join("|");

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const matrix = data.rows.map((row) =>
        row.elements.map((el) =>
          el.status === "OK" ? el.distance.value : Infinity
        )
      );

      setDistanceMatrix(matrix);

      const shortest = nearestNeighborTSP(matrix, 0);
      setShortestPaths(shortest);
    } catch (error) {
      console.error("Failed to fetch distance matrix:", error);
    }
  };

  // TSP Nearest Neighbor Algorithm
  const nearestNeighborTSP = (graph, startIndex) => {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const path = [startIndex];
    visited[startIndex] = true;
    let current = startIndex;

    for (let step = 1; step < n; step++) {
      let nextNode = -1;
      let minDistance = Infinity;

      for (let i = 0; i < n; i++) {
        if (!visited[i] && graph[current][i] < minDistance) {
          minDistance = graph[current][i];
          nextNode = i;
        }
      }

      if (nextNode !== -1) {
        visited[nextNode] = true;
        path.push(nextNode);
        current = nextNode;
      }
    }

    path.push(startIndex); // return to starting point
    return path;
  };
};

export default DistanceMatrix;
