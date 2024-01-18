import { useState } from "react";

const useGeo = () => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationPosition | null>(null);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition(position);
      });
    }
  };

  return { currentPosition, getGeolocation };
};
export default useGeo;
