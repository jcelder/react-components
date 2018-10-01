// TODO
var Cucumber = () => <li>Cucumber</li>
var Kale = () => <li>Kale</li>

var GroceryList = ({items}) => {
  var groceryItems = [];
  for (let i = 0; i< items.length; i++) {
    groceryItems.push(<GroceryListItem key={i} name={items[i]} />)
  }
  return (
    <ul>
      {groceryItems}
    </ul>
  )
}

// var GroceryListItem = ({name}) => <li>{name}</li>

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovered: false,
    }
  }
  
  onHoverHandler() {
    this.setState(prevState => {
      return {hovered: !prevState.hovered}
    })
  }

  render() {
    var styles = {
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    }

    return (
      <li 
        style={styles}
        onMouseOver={this.onHoverHandler.bind(this)}
      >
        {this.props.name}
      </li>
    )
  }
}

var App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList items={['cucumber', 'kale']} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));