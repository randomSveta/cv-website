import React from 'react';
import { Spinner } from 'reactstrap';

export default function Loader(props) {
    return (
        <div className="loader">
            <Spinner color="info" style={{ width: '10rem', height: '10rem' }} />
        </div>
    );
}
