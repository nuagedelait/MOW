import { Plugin as Plugin_2 } from "sanity";

/** @public */
export declare const desk: {
  additionnals: {
    settings: (S: any) => any;
  };
};

/** @public */
export declare const Sections: Plugin_2<void | SectionsConfig>;

/** @public */
export declare interface SectionsConfig {
  targets: Array<string>;
}

export {};
