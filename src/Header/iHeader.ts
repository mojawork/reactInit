export interface iHeaderData {
    links: Array<iHeaderLink>;
}

export interface iHeaderLink {
    name: string;
    target: boolean;
    url: string;
}