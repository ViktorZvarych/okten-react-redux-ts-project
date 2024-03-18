import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PublicLayout, PrivateLayout} from './layouts';
import {
    ErrorPage,
    LoginPage,
    MovieInfoPage,
    MoviesPage,
    MoviesListPage,
    RegisterPage,
    SignInPage,
    SearchResultsPage
} from "./pages";
import {AuthProvider, MoviesListsContextProvider} from './hocs';
import {ThemeContextProvider} from "./hocs";
import {LoginForm} from "./components";

const router = createBrowserRouter([
    {
        path: '',
        element: <ThemeContextProvider><MainLayout/></ThemeContextProvider>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>, children: [
                            {
                                index: true, element: <LoginForm/>
                            },
                            {
                                path: 'register', element: <RegisterPage/>
                            },
                            {
                                path: 'signin', element: <SignInPage/>
                            }
                        ]
                    }
                ]
            },
            {
                element:
                    <ThemeContextProvider>
                        <MoviesListsContextProvider>
                            <AuthProvider>
                                <PrivateLayout/>
                            </AuthProvider>
                        </MoviesListsContextProvider>
                    </ThemeContextProvider>,
                children: [
                    {
                        path: 'movies', element: <MoviesPage/>, children: [
                            {
                                index: true, element: <Navigate to={'list'}/>
                            },
                            {
                                path: 'list', element: <MoviesListPage/>
                            },
                            {
                                path: 'search-results', element: <SearchResultsPage/>
                            },
                            {
                                path: 'info/:id', element: <MovieInfoPage/>
                            },
                        ]
                    },

                ]
            }
        ]
    }
])

export {router}