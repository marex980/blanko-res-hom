export const homeItems = [
  { href: "/", label: "Home" },
];

export const listingItems = [
  {
    title: "Search Homes for Sale",
    submenu: [
      { label: "Search Homes for Sale", href: "/grid-default" },
    ],
  },
];

export const propertyItems = [
  {
    label: "Agents",
    subMenuItems: [
      { label: "Agents", href: "/agents" },
      { label: "About Agents", href: "/agent-single/1" },
    ],
  },

  {
    label: "Property Style",
    subMenuItems: [
      { label: "Single property style", href: "/single-v5/1" },

    ],
  },
  {
    label: "Dashboard",
    subMenuItems: [
      { label: "Dashboard Home", href: "/dashboard-home" },
      { label: "Message", href: "/dashboard-message" },
      { label: "New Property", href: "/dashboard-add-property" },
      { label: "My Properties", href: "/dashboard-my-properties" },
      { label: "My Favorites", href: "/dashboard-my-favourites" },
      { label: "Saved Search", href: "/dashboard-saved-search" },
      { label: "Reviews", href: "/dashboard-reviews" },
      { label: "My Package", href: "/dashboard-my-package" },
      { label: "My Profile", href: "/dashboard-my-profile" },
    ],
  },
];

export const blogItems = [
  { href: "/blog-list-v1", label: "Blog List" },
  { href: "/blogs/2", label: "Blog Single" },
];

export const pageItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "Faq" },
];
