
import {Button} from 'react-bootstrap';

var Main = React.createClass({
  render(){
    var className = ['Main', this.props.className].join(' ');
    return (
      <div className={className} style={this.props.style}>
        <h1>Main</h1>
        <Button bsStyle="prime">Hello</Button>
      </div>
    );
  }
});

ReactDOM.render(<Main/>, document.getElementById('content'));