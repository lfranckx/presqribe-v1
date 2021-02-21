import React, { Component } from 'react';

export default class SignUpForm extends Component {
    static defaultProps = {
        onSubmitSuccess: () => {}
    }

    state = { error: null };

    render() {
        const { error } = this.state;
        return (
            <>
                <form>
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    
                    <div className="input-box">
                        <label htmlFor="first-name-sign">First Name</label>
                        <input 
                            type="text" 
                            name='first_name' 
                            aria-label='first_name'
                            className='first_name' 
                            id='first-name-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='last-name-sign'>Last Name</label>
                        <input
                            type="text" 
                            name='last_name' 
                            aria-label='last_name'
                            className='last_name' 
                            id='last-name-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='email-sign'>Email</label>
                        <input
                            type="text" 
                            name='email' 
                            aria-label='email'
                            className='email' 
                            id='email-sign'
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label htmlFor='password-sign'>Password</label>
                        <input
                            type="password" 
                            name='password' 
                            aria-label='password'
                            className='password'
                            id='password-sign' 
                            required
                        />
                    </div>

                    <button className="btn submit">
                        Register
                    </button>

                </form>
            </>
        )
    }
}