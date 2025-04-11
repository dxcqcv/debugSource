import React from 'react';
import './app.css';
import {
    Box,
} from '@material-ui/core';

const App = () => {
	const url1 = 'https://www.clinique.com.cn/media/export/cms/products/1200x1500/cl_sku_CN5A15_1200x1500_0.png'

const url2 = 'https://www.clinique.com.cn/media/export/cms/products/1200x1500/cl_sku_CN5B04_1200x1500_0.png'
 const url3 = 'https://www.clinique.com.cn/media/export/cms/products/1200x1500/cl_sku_CN4029_1200x1500_0.png'

  const url4 =  'https://www.clinique.com.cn/media/export/cms/products/1200x1500/cl_sku_V8YG01_1200x1500_0.png'

	const list = [url1, url2, url3, url4]

  return (
    <div>
      <h1>Hello, React DnD!</h1>
			{list.map(url => (

        <Box
            component="div"
            m={1}
            className='imageBox'
            style={{ backgroundImage: `url(${url})` }}
        >
        </Box>

			))}
    </div>
  );
};

export default App;