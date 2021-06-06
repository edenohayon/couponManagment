import React, { Suspense } from 'react'
import { Switch, Route, useLocation  } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/home/home';
import EditCoupon from './pages/editCoupon/editCoupon'


const Routes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<div>loading...</div>}>
            <AnimatePresence exitBeforeEnter initial={false}>

                <Switch location={location} key={location.pathname}>

                    <Route path="/editCoupon/:couponId">
                        <EditCoupon />
                    </Route>
                    {/* <Route path="/editCoupon/">
              <EditCoupon />
            </Route> */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </ AnimatePresence>
        </Suspense>
    )
}

export default Routes
