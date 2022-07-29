import React, { useEffect, useState, useRef, cloneElement, forwardRef } from "react";
import { useDeepCompareEffectForMaps } from './helpers';


export default forwardRef((props, fref) => {

    const {
        onClick,
        onIdle,
        children,
        style,
        viewport,
        ...options
    } = props

    const ref = useRef(null);
    const [map, setMap] = useState();
    

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);

    useEffect(() => {
        if (map) {
            ["click", "idle"].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            );
            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }

            if(viewport){
                map.fitBounds(viewport);
            }
        }
    }, [map, onClick, onIdle]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    const childs = props.children.length > 0 ?  props.children.length : [props.children]

    return <div id="map" ref={(el) => {ref.current = el; fref.current=el}} style={style}>
        {
            childs.map((child, index) => {
                return cloneElement(child,{key:index,map})
            })
        }
    </div>
}
)