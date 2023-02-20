declare const _default: ({
    name: string;
    type: string;
    title: string;
    fields: {
        name: string;
        type: string;
        title: string;
    }[];
} | {
    name: string;
    type: string;
    title: string;
    fields: ({
        name: string;
        type: string;
        title?: undefined;
        description?: undefined;
        to?: undefined;
    } | {
        title: string;
        name: string;
        description: string;
        type: string;
        to: {
            type: string;
        }[];
    } | {
        title: string;
        name: string;
        type: string;
        description?: undefined;
        to?: undefined;
    })[];
})[];
export default _default;
