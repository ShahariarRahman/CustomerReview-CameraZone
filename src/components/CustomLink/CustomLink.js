import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className={match ? 'sm:border-b-2 border-red-700 text-red-600 m-2 px-6 py-2' : 'sm:border-b-2 text-black m-2 px-6 py-2'}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div >
    );
}

export default CustomLink;