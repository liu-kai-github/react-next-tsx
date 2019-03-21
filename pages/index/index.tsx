import * as React from 'react';
import Link from 'next/link'
import './index.scss';

function HelloWorld() {
    return (
        <div>
            Hello world
            <p>scoped!</p>
            <Link as={'/p/1'} href={'/post?id=1'}><span>Link</span></Link>
            <style jsx>{`
                p {
                  color: blue;
                }
                div {
                  background: red;
                }
                @media (max-width: 600px) {
                  div {
                    background: blue;
                  }
                }
              `}</style>
            <style global jsx>{`
                body {
                  background: black;
                }
            `}</style>
        </div>
    )
}

export default HelloWorld;