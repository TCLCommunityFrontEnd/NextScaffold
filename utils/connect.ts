import { connect as connectComponent } from 'react-redux';

//Typescript 并不允许把用 function 定义的函数作为装饰符来使用,
//官方建议当作一个function来调用而不是装饰器
export const connect = (mapStateToProps: any, mapDispatchToProps: any,mergeProps?:any,options?:any) => {
  return (target: any) => (
    connectComponent(mapStateToProps, mapDispatchToProps,mergeProps,options)(target) as any
  );
};