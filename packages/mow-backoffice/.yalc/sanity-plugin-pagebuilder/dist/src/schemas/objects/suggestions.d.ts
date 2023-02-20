declare const _default: {
    name: string;
    type: string;
    title: string;
    fields: ({
        name: string;
        title: string;
        type: string;
        options?: undefined;
        of?: undefined;
    } | {
        name: string;
        title: string;
        type: string;
        options: {
            source: string;
        };
        of?: undefined;
    } | {
        name: string;
        title: string;
        type: string;
        of: ({
            name: string;
            title: string;
            type: string;
            to: {
                type: string;
            }[];
            fields?: undefined;
            preview?: undefined;
        } | {
            name: string;
            title: string;
            type: string;
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            preview: {
                select: {
                    tags: string;
                    terms?: undefined;
                };
                prepare(selection: any): {
                    title: string;
                };
            };
            to?: undefined;
        } | {
            name: string;
            title: string;
            type: string;
            fields: {
                name: string;
                title: string;
                type: string;
            }[];
            preview: {
                select: {
                    terms: string;
                    tags?: undefined;
                };
                prepare(selection: any): {
                    title: string;
                };
            };
            to?: undefined;
        })[];
        options?: undefined;
    })[];
    preview: {
        select: {
            title: string;
        };
        prepare(selection: any): {
            title: string;
        };
    };
};
export default _default;
