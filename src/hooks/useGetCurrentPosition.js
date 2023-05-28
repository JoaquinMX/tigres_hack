import { useState, useEffect } from "react";
const useGetCurrentPosition = () => {
    const [position, setPosition] = useState([25.726590, -100.313666]);

    useEffect(() => {
        /**
         * Retrieve Current Position
         */
        setPosition([25.726590, -100.313666]);
      }, [])

    return position;
}

export default useGetCurrentPosition;