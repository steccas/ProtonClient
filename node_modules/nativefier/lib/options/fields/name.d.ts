declare type NameParams = {
    packager: {
        name?: string;
        platform?: string;
        targetUrl: string;
    };
};
export declare function name(options: NameParams): Promise<string>;
export {};
