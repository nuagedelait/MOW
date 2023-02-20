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
    fields: {
        title: string;
        name: string;
        type: string;
    }[];
};
export default _default;
