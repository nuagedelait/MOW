declare const _default: {
    name: string;
    type: string;
    title: string;
    preview: {
        select: {
            title: string;
            slug: string;
        };
        prepare(selection: any): {
            title: string;
        };
    };
    fields: ({
        name: string;
        type: string;
        title: string;
        description?: undefined;
        options?: undefined;
        of?: undefined;
    } | {
        name: string;
        type: string;
        title: string;
        description: string;
        options: {
            list: string[];
        };
        of?: undefined;
    } | {
        title: string;
        name: string;
        type: string;
        of: {
            type: string;
        }[];
        description?: undefined;
        options?: undefined;
    })[];
};
export default _default;
