import Axios from 'utils/http';
import { TypeInterface } from 'custom';
import {devBaseUrls,proBaseUrls} from 'configs/api';
import API from 'configs/const'

let actions:TypeInterface._Object = {};
const appOpts = {
    devBaseUrl:devBaseUrls.baseUrl1,
    proBaseUrl:proBaseUrls.baseUrl1
}

actions.loadUserInfo = () => (dispatch:any) => {
    return Axios.get('/user/info',{},appOpts).then((info:any)=>{
        console.log(info);
    })
}
export default actions;
