module.exports = [
  {
    label: "Home",
    subMenu: [
      { path: "/home-v1", label: "Home" },
    ]
  },
  {
    label: "Search",
    subMenu: [
      {
        label: "Search Homes for Sale",
        subMenu: [
          { label: "Search Homes for Sale", path: "/grid-default" },
        ],
      },
    ],
  },
  {
    label: "Property",
    subMenu: [
      {
        label: "Agents",
        subMenu: [
          { label: "Agents", path: "/agents" },
          { label: "About Agents", path: "/agent-single/1" },
        ],
      },

      {
        label: "Property Style",
        subMenu: [

          { label: "Single property style", path: "/single-v5/1" },
        ],
      },
    ],
  },
  {
    label: "Dashboard",
    subMenu: [
      { label: "Dashboard Home", path: "/dashboard-home" },
      { label: "Message", path: "/dashboard-message" },
      { label: "New Property", path: "/dashboard-add-property" },
      { label: "My Properties", path: "/dashboard-my-properties" },
      { label: "My Favorites", path: "/dashboard-my-favourites" },
      { label: "Saved Search", path: "/dashboard-saved-search" },
      { label: "Reviews", path: "/dashboard-reviews" },
      { label: "My Package", path: "/dashboard-my-package" },
      { label: "My Profile", path: "/dashboard-my-profile" },
    ],
  },
  {
    label: "Blog",
    subMenu: [
      { path: "/blog-list-v1", label: "Blog List" },
      { path: "/blogs/2", label: "Blog Single" },
    ],
  },

  {
    label: "Pages",
    subMenu: [
      { path: "/about", label: "About" },
      { path: "/contact", label: "Contact" },
      { path: "/faq", label: "Faq" },
    ],
  },
];
