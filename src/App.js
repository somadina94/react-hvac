import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import AlertModal from './components/UI/AlertModal';
import About from './components/about/About';
import HomeServices from './components/home-services/HomeServices';
import CommercialServices from './components/commercial-services/CommercialServices';
import Why from './components/why-us/Why';
import Faq from './components/faq/Faq';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="home-services" element={<HomeServices />} />
            <Route path="commercial-services" element={<CommercialServices />} />
            <Route path="why-us" element={<Why />} />
            <Route path="faq" element={<Faq />} />
        </Route>
    )
);

function App() {
    const showModal = useSelector((state) => state.alert.showModal);
    return (
        <Fragment>
            {showModal && <AlertModal />}
            <RouterProvider router={router} />
            <TawkMessengerReact propertyId="64704413ad80445890ef3152" widgetId="default" />
        </Fragment>
    );
}

export default App;
