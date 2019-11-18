import Mock from 'mockjs';
import { TypeInterface } from '../custom';

// Mock.setup({
//     timeout: 500
// });

var mockList:Array<any> = [];


mockList = mockList.concat(require('./app').default);

var mockData:TypeInterface._Object = {};

mockList.forEach((obj) => {
    mockData[obj.url] = obj.result;
});

export default function mockServer (url:string,opts:any) {
    if (mockData[url]) {
        Mock.mock(opts.devBaseUrl+url, mockData[url]);
    }
}

