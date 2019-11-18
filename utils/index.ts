import { TypeInterface } from "../custom";

export function objectAppend (obj0:TypeInterface._Object, obj:TypeInterface._Object) {
    for (var k in obj) {
        if (!obj0.hasOwnProperty(k)) {
            obj0[k] = obj[k];
        }
    }
    return obj0;
}
/**
 * 判断传入数据是否为空
 * @param val
 * @returns {*}
 */
export function isEmpty(val:any){
    switch(Object.prototype.toString.call(val)){
        case '[object Array]':
            return !(val&&val.length);
        case '[object Object]':
            return !(val&&JSON.stringify(val)!=='{}');
        case '[object Null]':
            return true;
        case '[object Undefined]':
            return true;
        case '[object Boolean]':
            return val;
        case '[object String]':
            return val==='';
        default:
            return false;
    }
}
export function getOffsetTopByBody (el:any) {
    let offsetTop = 0
    while (el && el.tagName !== 'BODY') {
      offsetTop += el.offsetTop
      el = el.offsetParent
    }
    return offsetTop
}