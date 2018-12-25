export default {
  items: [
    {
      name: 'Dashboard',
      url: '/core/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    // --------------------------------------
    // Lebendiger Advent

    {
      title: true,
      name: 'Lebendiger Advent',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Kunden',
      url: '/kunden',
      icon: 'icon-drop',
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Colors',
      url: '/core/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/core/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/core/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/core/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/core/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/core/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/core/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/core/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/core/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/core/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/core/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/core/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/core/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/core/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/core/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/core/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/core/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/core/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/core/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Buttons',
      url: '/core/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/core/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/core/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/core/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/core/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Charts',
      url: '/core/core/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Icons',
      url: '/core/core/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/core/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/core/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/core/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/core/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/core/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/core/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/core/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/core/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/core/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Logine',
          url: '/core/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/core/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/core/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/core/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/core/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    }
  ],
};
