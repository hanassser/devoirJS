import React from "react";
import axios from "axios";

class Authoraxios extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    var api = "https://supdevinci.nine1000.tech/authors";
    axios.get(api).then((response) => {
      this.setState({
        list: response.data.result
      });

      console.log(response.data.result);
    });
  }

  render() {
    return (
      <div>
        <h1>Author List</h1>
        <ul>
          {this.state.list.map((value, key) => {
            return (
              <div>
                <li key={key}>{value.display_name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Authoraxios;
