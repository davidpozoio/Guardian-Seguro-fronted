import { useState } from "react";

const useGeo = () => {
  const [enableGeo, setEnableGeo] = useState(false);
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationPosition | null>(null);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition(position);
        setEnableGeo(true);
      });
    }
  };

  return { currentPosition, getGeolocation, enableGeo };
};
export default useGeo;
