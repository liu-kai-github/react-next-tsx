import * as React from 'react';
import Link from 'next/link'
import './index.scss';
import Head from "next/head";

function HelloWorld() {
    return (
        <div>
            <Head>
                <title>Hello World</title>
                <meta name="description" content="简介内容"/>
                <meta name="keywords" content="HTML,ASP,PHP,SQL"/>
            </Head>
            <h1>Hello world</h1>
            <Link
                as={'/p/1'}
                // href={'/post?id=1'}
                href={{pathname: '/post', query: {id: 1}}}
            ><span>Link</span></Link>
        </div>
    )
}

export default HelloWorld;