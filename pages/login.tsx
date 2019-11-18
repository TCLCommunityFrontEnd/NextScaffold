import * as React from 'react';
import { connect } from 'react-redux';
import action from 'actions/app';
import { Form, Icon, Input, Button,  Alert } from 'antd';
import Router from 'next/router';
import {withIntl} from 'components/CustomComponent';
import { FormattedMessage, injectIntl } from 'react-intl';
// import LocaleToggle from 'components/LocaleToggle';

import 'less/login.less';

interface CompProps {
    form?:any,
    onLogin?:Function,
    locale?:string,
    intl?:any,
    initLocale?:Function
}
interface CompState {
    showIncorrect:boolean,
    loading:boolean
}

const FormItem = Form.Item;

class Login extends React.Component<CompProps,CompState> {
    state = {
        showIncorrect: false,
        loading: false
    };
    static async getInitialProps(){

    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, data:any) => {
            if (!err) {
                this.setState({ loading: true });
                // location.href = 'index.html';
                // this.props.onLogin.call(this, data);
                Router.push('/index');
            }
        });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        const {locale} = this.props;
        const intl = this.props.intl;
        return ( 
            <div className="login">
                <div>
                    
                    <Form onSubmit={this.handleSubmit} className="main">
                        
                        <FormItem className={'account'}>
                            {/* 这应该是个bug,getFieldDecorator的id必须设置为FormattedMessage的id才能找到对应字段 */}
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: <FormattedMessage id="login_index_msg2"/> }]
                            })(
                                <Input size="large"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder={intl.formatMessage({ id: 'login_index_msg3' })} />
                            )}
                        </FormItem>
                        <FormItem className={'pwd'}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: <FormattedMessage id="login_index_msg4"/> }]
                            })(
                                <Input size="large"
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={() => { this.state.showIncorrect && this.setState({ showIncorrect: false }); }}
                                    type="password"
                                    placeholder={intl.formatMessage({ id: 'login_index_msg5' })} />
                            )}
                        </FormItem>
                        {this.state.showIncorrect && <Alert message={<FormattedMessage id={'login_index_msg6'}/>} type="error" showIcon />}
                        {/* <div>
                            <span><FormattedMessage id={'login_index_msg7'}/></span>
                        </div> */}
                        <div>
                            <Button className="loginBtn"  size="large" htmlType="submit" icon="login" loading={this.state.loading}>
                                <FormattedMessage id={'login_index_msg8'}/>
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}


let LoginComponent:any = connect((state:any)=>{
    const {locale} = state.app;
    return {locale}
}, null)(Form.create()(Login));

export default withIntl(injectIntl(LoginComponent));
