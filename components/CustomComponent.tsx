import * as React from 'react';
import {connect} from 'utils/connect';
import zhCN from 'configs/language/zhCN';
import enUS from 'configs/language/enUS';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as zh from 'react-intl/locale-data/zh';
import * as en from 'react-intl/locale-data/en';
import action from 'actions/app';
addLocaleData([...en, ...zh]);

interface CompProps{
    locale?:string,
    children?:any,
    initLocale?:Function
}

function chooseLocale (lang) {
    switch (lang.split('-')[0]) {
    case 'en':
        return enUS;
    case 'zh':
        return zhCN;
    default:
        return zhCN;
    }
}


@connect((state:any)=>{
    const {locale} = state['app'];
    return {locale};
},(dispatch:any)=>({
    initLocale(locale:string){
        dispatch({type:'APP_TOGGLE_LOCALE',locale});
        dispatch(action.loadUserInfo());
    }
}))

class CustomComponent extends React.Component<CompProps>{
    componentDidMount(){
        const defaultLocale = localStorage.getItem('tclCloud_lang')||navigator.language;
        this.props.initLocale(defaultLocale);
    }
    render(){
        const {locale,children} = this.props;
        return (
            <IntlProvider key={locale} locale={locale} messages={chooseLocale(locale)}>
                {children}
            </IntlProvider>
        )
    }
}


export function withIntl(WrappedComponent):any{
    return class extends React.Component{
        render(){
            return (
                <CustomComponent><WrappedComponent/></CustomComponent>
            )
        }
    }
}


