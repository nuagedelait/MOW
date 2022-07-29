
import React, { useEffect, useRef, useState, forwardRef } from 'react'

import { Card, Button, Inline, useToast} from '@sanity/ui'
import PatchEvent, { set, unset } from '@sanity/form-builder/PatchEvent';
import { FieldPresence } from '@sanity/base/presence';

import Wrapper from './map/mapWrapper';
import Map from './map/map';
import Marker from './map/marker';
import Searchbox from './map/searchbox';

import { useGoogleFields, useAddressFields} from './map/hooks/useFields';


import {GrAdd as AddIcon} from 'react-icons/gr'

import useAddressCreation from './map/hooks/useAddressCreation'

const MapPicker = forwardRef((props, ref) => {

    const {
        type,
        readOnly,
        placeholder,
        markers,
        presence,
        onFocus,
        onBlur,
        onChange
    } = props


    const defaultGeoloc = { lat: -25.363, lng: 131.044 }

    const defaultValue = {
        address: {},
        geoloc : defaultGeoloc
    }

    const toast = useToast()
    const googleFields = useGoogleFields(type);

    const [view, setView] = useState(null);
    const [value, setValue] = useState(props.value ? props.value : defaultValue)

    const handleMapClicked = (event) => {

        const newValue = {
            ...value,
            geoloc: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                alt: 0
            }
        }

        onChange(PatchEvent.from(set(newValue)))
    }

    const handlePlaceSelected = (place) => {
        
        const address = useAddressFields(googleFields,place);
        
        const newValue = {
            address:address,
            geoloc: {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
                alt: 0
            }
        }

        setValue(newValue);

        const bounds = new window.google.maps.LatLngBounds();
        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        setView(bounds);

        onChange(PatchEvent.from(set(newValue)))
    }


    const handleCreateAddress = () => {
        useAddressCreation(value.address,(status, message) => {
            toast.push({
                status: status,
                title: message
              })
        });
    }

    return (
        <Wrapper apiKey={type.options.apikey}>
            <Card>
                <Searchbox onSelect={handlePlaceSelected}></Searchbox>
                {
                    <Map onClick={handleMapClicked}
                        ref={ref} 
                        zoom={7}
                        center={value.geoloc}
                        style={{ height: '400px' }}
                        viewport={view}
                    >
                        <Marker position={value.geoloc} />
                    </Map>
                }
            </Card>
            <Card padding={4} style={{textAlign: 'center'}}>
                <Inline space={[3, 3, 4]}>
                    <Button
                    fontSize={[2, 2, 3]}
                    icon={AddIcon}
                    mode="ghost"
                    padding={[3, 3, 4]}
                    text="Create Address"
                    onClick={handleCreateAddress}
                    />
                </Inline>
            </Card>

        </Wrapper>
    )
}
)

// Create the default export to import into our schema
export default MapPicker;