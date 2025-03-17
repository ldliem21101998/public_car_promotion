import { path, allowedRoles } from "../constants";
import {
    UserProfile,
    Home,
    Preview
} from "../../pages";
import { Booking } from "../../components";

export const PrivateRoutes = [
    {
        path: `${path.common.Home}`,
        exact: true,
        component: <Home />,
        main: () => <Home />,
        role: [allowedRoles[2]],
    },
    {
        path: `${path.common.Preview}/:id`,
        exact: true,
        component: <Preview />,
        main: () => <Preview />,
        role: [allowedRoles[2]],
    },
    {
        path: `${path.private.Booking}`,
        exact: true,
        component: <Booking />,
        main: () => <Booking />,
        role: [allowedRoles[2]],
    }
];
