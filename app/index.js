var React = require('react');
var ReactDOM = require('react-dom');

var HelloWord = React.createClass({
    render: function () {
        return (
            <div> Hello World </div>
        )
    }
});

ReactDOM.render(
    <HelloWord />,
    document.getElementById('app')
);