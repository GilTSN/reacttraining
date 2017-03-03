var userData = {
    name: 'Gil',
    username: 'GilTSN',
    image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
};

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function () {
        return (
            <img src={this.props.image} style={{height: 100, width: 100}}/>
        )
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
});

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic image={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});

ReactDOM.render(
    <Avatar user={userData} />,
    document.getElementById('app')
);