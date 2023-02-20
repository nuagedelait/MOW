declare const _default: {
    name: string;
    type: string;
    title: string;
    preview: {
        select: {
            title: string;
        };
        prepare(selection: any): {
            title: string;
        };
    };
    fields: ({
        name: string;
        type: string;
        title: string;
        options?: undefined;
        fields?: undefined;
    } | {
        name: string;
        type: string;
        title: string;
        options: {
            hotspot: boolean;
        };
        fields: {
            name: string;
            type: string;
            title: string;
        }[];
    })[];
};
export default _default;
