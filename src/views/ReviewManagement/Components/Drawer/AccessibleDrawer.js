import React from "react";
import { Drawer, IconButton, ButtonToolbar, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import Filter from "components/Filter";
import "components/Filter.css";
import "./AccessibleDrawer.css";

class AccessibleDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "xs",
      show: false,
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }
  close() {
    this.setState({
      show: false,
    });
  }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true,
    });
  }
  handleChangeSize(size) {
    this.setState({ size });
  }
  render() {
    const { size, placement, show } = this.state;

    return (
      <div className="drawer-main">
        <ButtonToolbar>
          <IconButton
            icon={<Icon icon="angle-left" />}
            onClick={() => this.toggleDrawer("right")}
          >
            Filter
          </IconButton>
        </ButtonToolbar>

        <Drawer
          size={size}
          placement={placement}
          show={show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Filter</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Filter />
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}

export default AccessibleDrawer;
