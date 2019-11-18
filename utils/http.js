import _Axios from 'tcl-http-request';
import mockServer from '../mock';
let Axios = {};
const isProd = process.env.NODE_ENV==='production'

Axios.get = function(url,params={},opts={}){
    mockServer(url,opts);
    opts.baseURL = isProd?opts.proBaseUrl:opts.devBaseUrl;
    return _Axios.get(url,params,opts)
}
Axios.post = function(url,params={},opts={}){
    mockServer(url,opts);
    opts.baseURL = isProd?opts.proBaseUrl:opts.devBaseUrl;
    return _Axios.post(url,params,opts);
}

Axios.raw = function(method,url,params={},opts={}){
    mockServer(url,opts);
    opts.baseURL = isProd?opts.proBaseUrl:opts.devBaseUrl;
    return _Axios.raw(method,url,params,opts);
}
export default Axios;