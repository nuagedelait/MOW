import React, { useEffect, useRef } from 'react';
import { TextInput } from '@sanity/ui';

export default ({onSelect}) => {

    const inputRef = useRef(null);

    useEffect( () => {
        if(inputRef.current){
            const searchBox = new window.google.maps.places.SearchBox(inputRef.current);
            searchBox.addListener("places_changed", () => {
                const places = searchBox.getPlaces();
                if(onSelect){
                    onSelect(places[0]);
                }
            });
            return () => {
                if(searchBox){
                    window.google.maps.event.clearListeners(searchBox)
                }
                
            }
        }

    },[inputRef.current])

    return <TextInput ref={inputRef}></TextInput>

}