import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout, PublicLayout, PrivateLayout} from './layouts';
import {
    ErrorPage,
    LoginPage,
    MovieInfoPage,
    MoviesPage,
    MoviesListPage,
    SearchResultsPage
} from "./pages";
import {AuthProvider} from './hocs';
import {ThemeContextProvider} from "./hocs";
import {HeroBanner, LoginForm} from "./components";

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
                            }
                        ]
                    }
                ]
            },
            {
                element:
                    <AuthProvider>
                        <PrivateLayout/>
                    </AuthProvider>,
                children: [
                    {
                        path: 'movies', element: <MoviesPage/>, children: [
                            {
                                index: true, element: <Navigate to={'hero'}/>
                            },
                            {
                                path: 'hero', element: <HeroBanner/>
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