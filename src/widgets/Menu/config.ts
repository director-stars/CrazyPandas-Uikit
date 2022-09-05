import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Home",
    icon: "Battle",
    href: "/",
  },
  {
    href: "",
    label: "Trade",
    icon: "Panda",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "Stone",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "Pool",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "Ticket",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "Nft",
    href: "/nft",
  },
  {
    href: "",
    label: "Profile & Teams",
    icon: "Groups",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    // calloutClass: "rainbow",
  },
  {
    href: "",
    label: "Info",
    icon: "Info",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    href: "",
    label: "IFO",
    icon: "Ifo",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    href: "",
    label: "More",
    icon: "More",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/goosedefi",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      {
        label: "中文",
        href: "https://t.me/goosefinancechinese",
      },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      {
        label: "Italiano",
        href: "https://t.me/goosefinanceitalian",
      },
      {
        label: "русский",
        href: "https://t.me/goosefinancerussian",
      },
      {
        label: "Türkiye",
        href: "https://t.me/GooseFinanceTurkey",
      },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      {
        label: "Español",
        href: "https://t.me/goosefinancespanish",
      },
      {
        label: "日本語",
        href: "https://t.me/goosefinancejapanese",
      },
      {
        label: "Français",
        href: "https://t.me/goosefinancefrench",
      },
      {
        label: "Announcements",
        href: "https://t.me/goosefinanceann",
      },
      {
        label: "Price Bot",
        href: "https://t.me/BinanceRocketEGG",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/goosedefi",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/GooseFinanceofficial",
  },
];

export const MENU_HEIGHT = 82;
export const MOBILE_MENU_HEIGHT = 44;
export const MENU_ENTRY_HEIGHT = 82;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
