import React, { useEffect, useState } from 'react';

export default (options) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker({
                icon: {
                    url: '/static/images/marker.svg',
                    size: new google.maps.Size(20, 32)
                }
            }));
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};