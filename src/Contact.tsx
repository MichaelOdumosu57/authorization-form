// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'swordfish',
            authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
            'input[type="password"]').value;
        console.log(this)
        const auth = password === this.state.password;
        this.setState({
            authorized: auth
        });
    }

    login = (
        <form action="#"onSubmit={(event) => this.authorize(event)}>
            <input type="password" placeholder="Password" />
            <input type="submit" />
        </form>
    )

    contactInfo = (
        <ul>
            <li>
                client@example.com
            </li>
            <li>
                555.555.5555
            </li>
        </ul>
    );

    render() {
        return (
            <div id="authorization">
                <h1>{this.state.authorized ? "Contact" : "Enter the Password"}</h1>
                {this.state.authorized ? this.contactInfo : this.login}
            </div>
        );
    }
}


ReactDOM.render(
    <Contact />,
    document.getElementById('app')
);

export default Contact;