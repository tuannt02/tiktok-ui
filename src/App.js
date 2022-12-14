import { Fragment } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        let Layout;
                        const Page = route.component;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout === undefined) {
                            Layout = DefaultLayout;
                        } else {
                            Layout = route.layout;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
