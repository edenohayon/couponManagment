import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home';
import EditCoupon from './pages/editCoupon/editCoupon'


const Routes = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>

            <Switch>
           
            <Route path="/editCoupon/:couponId">
              <EditCoupon />
            </Route>
            {/* <Route path="/editCoupon/">
              <EditCoupon />
            </Route> */}
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>

        </Suspense>
    )
}

export default Routes
