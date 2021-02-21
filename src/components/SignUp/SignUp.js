import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {}
        }
    }

    handleSubmitSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/create_profile';
        history.push(destination);
    }

    render() {
        return (
            <>
                <section className="sign-up-section">
                    <h2>Register</h2>
                    <SignUpForm 
                        onSubmitSuccess={this.handleSubmitSuccess}
                    />
                </section>
            </>
        );
    }
}