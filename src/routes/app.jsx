import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/CaseOverview/CaseOverview.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard", 
    sidebarName: "Welcome",
    navbarName: "Welcome",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Case Overview",
    navbarName: "Case Overview",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Patient Chart",
    navbarName: "Patient Chart",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Dialogue",
    navbarName: "Dialogue",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Summary",
    navbarName: "Summary",
    icon: BubbleChart,
    component: Icons
  },
 
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
