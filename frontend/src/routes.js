import React from 'react';
import DefaultLayout from './containers/DefaultLayout';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const Home = React.lazy(() => import('./views/LebendigerAdvent/Home'));
const Kunden = React.lazy(() => import('./views/LebendigerAdvent/Kunden'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/kunden', exact: true, name: 'Kunden', component: Kunden },


  { path: '/core', exact: true, name: 'CoreUI', component: DefaultLayout },
  { path: '/core/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/core/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/core/theme/colors', name: 'Colors', component: Colors },
  { path: '/core/theme/typography', name: 'Typography', component: Typography },
  { path: '/core/base', exact: true, name: 'Base', component: Cards },
  { path: '/core/base/cards', name: 'Cards', component: Cards },
  { path: '/core/base/forms', name: 'Forms', component: Forms },
  { path: '/core/base/switches', name: 'Switches', component: Switches },
  { path: '/core/base/tables', name: 'Tables', component: Tables },
  { path: '/core/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/core/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/core/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/core/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/core/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/core/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/core/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/core/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/core/base/navs', name: 'Navs', component: Navs },
  { path: '/core/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/core/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/core/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/core/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/core/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/core/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/core/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/core/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/core/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/core/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/core/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/core/icons/flags', name: 'Flags', component: Flags },
  { path: '/core/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/core/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/core/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/core/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/core/notifications/badges', name: 'Badges', component: Badges },
  { path: '/core/notifications/modals', name: 'Modals', component: Modals },
  { path: '/core/widgets', name: 'Widgets', component: Widgets },
  { path: '/core/charts', name: 'Charts', component: Charts },
  { path: '/core/users', exact: true,  name: 'Users', component: Users },
  { path: '/core/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
