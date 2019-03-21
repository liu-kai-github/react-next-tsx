import * as React from 'react';
import {withRouter} from 'next/router';
import Header from '../../components/Header';

function Post({router}: any) {
    return (<div>
        <Header/>
        <h1>id: {router.query.id}</h1>
    </div>);
}

export default withRouter(Post);