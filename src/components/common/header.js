var React = require('react');

var Header = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/react.png"/>
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#contact">contact</a></li>
                         <li><a href="/#authors">Authors</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports =Header;