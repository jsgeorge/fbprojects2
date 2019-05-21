import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./sideDrawer";

class Header extends Component {
  state = {
    showHeader: false,
    drawerOpen: false
  };
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);

  }
  handleScroll=()=>{
    if(window.scrollY > 0){
      this.setState({
        showHeader:true
      })
    } else {
      this.setState({
        showHeader:false
      })
    }
  }
  toggleDrawer = value => {
    this.setState({
      drawerOpen: value,
      showHeader: false
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? "#111" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">All the music</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
