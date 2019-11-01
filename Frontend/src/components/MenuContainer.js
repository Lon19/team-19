import React from 'react';

export default class MenuContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: '',
      activeItemPosition: 0,
      activeItemColor: '',
      //Items to be displayed
      menuItems: [
        { text: 'Mental Health' },
        { text: 'Adjustments' },
        { text: 'Self-confidence' },
      ],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(activeItem) {
    return e => {
      e.preventDefault();
      this.setState({
        activeItem,
        activeItemPosition: document.getElementById(activeItem).offsetTop,
        activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
      });
    }
  }

  render() {
    const menuItems = this.state.menuItems.map(item => <MenuItem item={item} handleClick={this.handleClick} />)
    return (
      <div className='menu-container'>
        <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }} />
        {menuItems}
      </div>
    );
  }
}

//Menu item component
function MenuItem(props) {
  return (
    <div
      className='menu-item'
      id={props.item.text}
      onMouseOver={props.handleClick(props.item.text)}
    >
      {props.item.text.toUpperCase()}
    </div>
  );
}