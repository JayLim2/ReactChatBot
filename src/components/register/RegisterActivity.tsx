import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {Body, Button, Container, Content, Header, Icon, Left, Right, Title} from "native-base";
import {INDIGO, SETTINGS_ACTIVITY} from "../../configuration/Constants";
import i18n from "assets/i18nx";
import RegisterForm from "./RegisterForm";
import ActivityHeader from "../common/ActivityHeader";

class RegisterActivity extends Component<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ActivityHeader navigation={this.props.navigation}
                                name={"register"}
                />
                <Content contentContainerStyle={{flexGrow: 1}}>
                    <RegisterForm navigation={this.props.navigation}/>
                </Content>
            </Container>
        );
    }
}

export default withTranslation()(RegisterActivity);
