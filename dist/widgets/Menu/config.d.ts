import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: MenuItemsType[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 82;
export declare const MOBILE_MENU_HEIGHT = 44;
export declare const MENU_ENTRY_HEIGHT = 82;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
