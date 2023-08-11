import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Friends from './app/pages/friends';
import AddFriends from './app/pages/friends/add';
import Home from './app/pages/home';
import OnBoarding from './app/pages/on-boarding';
import Settings from './app/pages/settings';
import { AppDataProvider } from './app/provider/AppData';
import SignIn from './auth/pages/sign-in';
import SignUp from './auth/pages/sign-up';
import AuthRoute from './shared/components/HOC/AuthRoute';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="auth" element={<AuthRoute redirectIf="authenticated" redirectTo="/app" />}>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
            </Route>
            <Route
                path="app"
                element={
                    <AppDataProvider>
                        <AuthRoute redirectIf="unauthenticated" redirectTo="/auth/sign-in" />
                    </AppDataProvider>
                }
            >
                <Route path="" element={<Home />} />
                <Route path="settings" element={<Settings />} />
                <Route path="friends" element={<Friends />} />
                <Route path="friends/add" element={<AddFriends />} />
            </Route>
            <Route path="on-boarding" element={<OnBoarding />} />
        </Route>,
    ),
);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
