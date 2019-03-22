// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import * as React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps}
    }

    render() {
        return (
            <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="theme-color" content="#2196f3"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        );
    }
}

export default MyDocument;