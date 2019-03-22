import * as React from 'react';
import Link from 'next/link'
import './index.less';
import Button from 'antd-mobile/lib/button';  // 加载 JS
import 'antd-mobile/lib/button/style/css';        // 加载 CSS

function HelloWorld() {
    return (
        <div>
            <Link as={'/p/1'} href={'/post?id=1'}><span>Link</span></Link>
            <Button>132</Button>
        </div>
    )
}

export default HelloWorld;