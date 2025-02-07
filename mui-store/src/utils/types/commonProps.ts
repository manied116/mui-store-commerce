export interface templateProps {
    id          : number;
    image       : string;
    title       : string;
    description : string;
    price       : string;
    rating?     : number;
    url?        : string;
}

export interface cartProps {
    id       : number;
    name     : string;
    seller   : string;
    license  : string;
    updates  : string;
    support  : string;
    price    : number;
    quantity : number;
    image    : string;
}
export interface TabProps {
    id      : number;
    label   : string;
    content : string;
}

export interface PackageProps {
    name  : string;
    lang? : string;
    std   : boolean;
    plus  : boolean;
    ext   : boolean;
}
export interface FeatureProps {
    name  : string;
    isNew : boolean;
}

export interface Review {
    name     : string;
    timeAgo  : string;
    rating   : number;
    title?   : string;
    content? : string;
    category : string;
}
export interface ChangeLogEntry {
    version : string;
    date    : string;
    changes : (string | { text: string; link: string })[];
}