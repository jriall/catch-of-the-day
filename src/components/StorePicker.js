import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    console.log('works');
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

//making router available from the App level import of router using context
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
