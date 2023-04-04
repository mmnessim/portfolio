import React from 'react';
import { JWPepperSearch } from './jwpeppersearch';
import { PostAPI } from './postapi';
import { DisplaySQL } from './getapi';
import { Link, Outlet } from 'react-router-dom';

export function APIDemo() {
    return (
        <div className='container'>
            <h3>API Demo</h3>
            <p>The buttons on this page make API calls to the backend hosted on Heroku. I created a database of string orchestra pieces available for purchase on JWPepper's website using Python and BeautifulSoup to scrape the data. You can download the whole .csv file, or you can search by level or by composer on this page.</p>
            <PostAPI />
            <Link to={'/apidemo/get'} className='btn'>Display results</Link>
            <Outlet />
        </div>
    )
}