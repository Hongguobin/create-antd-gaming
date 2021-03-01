import React from 'react';
import './index.less'
import { recommendList } from '../../utils'
import { Route } from 'react-router-dom'

function Discover() {
    return (
        <div className="discover">
            {
                recommendList.map((item, index) => {
                    return (
                        <Route
                            key={index}
                            exact={item.exact}
                            path={item.path}
                            component={item.component}
                        >
                        </Route>
                    )
                })
            }
        </div>
    )
}
export default Discover