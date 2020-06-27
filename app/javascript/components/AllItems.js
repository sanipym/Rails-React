import React from "react"
import PropTypes from "prop-types"
class AllItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    fetch('/api/v1/items.json') 
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ items: data})});
  }

 

  render () {
    var items = this.state.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    );
  }
  // render () {
  //   return (
  //     <div>
  //       <h1>Hi Sanish</h1>
  //     </div>
  //   );
  // }
}

export default AllItems
