export interface iTeaserData {
    data:iTeaserItem;
}

export interface iTeaserItem {
    name: string;
    target: boolean;
    published: string;
    imageSrc: string;
    url: string;
}