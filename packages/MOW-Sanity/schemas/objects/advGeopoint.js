import MapPicker from '../../src/mapPicker'

export default {

    name: 'advGeopoint',
    type: 'object',
    title: 'Advance Geopoint',
    options: {
        apikey: 'AIzaSyDq-i3mWw19t2V-S3pXdRquFcfXD9QeQhQ'
      },
    fields: [
        {
            title: 'Address',
            name: 'address',
            description: 'Geoloc adress',
            type: 'place',
        },
        {
            title: 'Coordinate',
            name: 'geoloc',
            type: 'geopoint',
        },
    ],
    inputComponent: MapPicker

}