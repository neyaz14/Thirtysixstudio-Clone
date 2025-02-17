import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router';
import Root from './Pages/Root';
import Home from './Pages/Home';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root></Root>}>
                    <Route index element={<Home></Home>}/>
        
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
