declare const _default: {
    name: string;
    type: string;
    title: string;
    fields: ({
        name: string;
        type: string;
        title: string;
        description?: undefined;
        options?: undefined;
        to?: undefined;
    } | {
        name: string;
        type: string;
        title: string;
        description: string;
        options: {
            list: string[];
            hotspot?: undefined;
        };
        to?: undefined;
    } | {
        title: string;
        name: string;
        description: string;
        type: string;
        to: {
            type: string;
        }[];
        options?: undefined;
    } | {
        title: string;
        name: string;
        type: string;
        options: {
            hotspot: boolean;
            list?: undefined;
        };
        description?: undefined;
        to?: undefined;
    })[];
    preview: {
        select: {
            slug: string;
        };
        prepare(selection: any): {
            title: string;
        };
    };
};
export default _default;
