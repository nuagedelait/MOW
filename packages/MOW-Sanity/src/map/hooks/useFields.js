export const useGoogleFields = (type) => {
    const googleFields = {};
    const addressType = type.fields.find( type => type.name === 'address');
    if(addressType){
        addressType.type.fields.forEach( field => {
            if(field.type.options && field.type.options.googleField){
                googleFields[field.type.options.googleField] = field.name;
            }else{
                googleFields[field.name] = field.name;
            }
        })
    }
    return googleFields;
}

export const useAddressFields = (googleFields, googlePlace) => {

    const address = {}

    const components = [
            ...googlePlace.address_components,
            {
                types:['name'],
                long_name:googlePlace.name
            }
        ].forEach( component => {
        const componentType = component.types[0];
        const componentValue = component.long_name;

        if(googleFields[componentType]){
            address[googleFields[componentType]] = componentValue;
        }
    })

    return address;
}