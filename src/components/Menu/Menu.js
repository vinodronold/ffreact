import React, { PureComponent } from 'react'
import Icon from '../Icons'
import { clsMenuAnchor, clsMenu } from '../../constants/ui'
import List, { ListItem } from '../List'
import { MDCSimpleMenu } from '@material/menu/dist/mdc.menu'
import './Menu.css'

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.node = null
    this.menu = null
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return nextProps.moreOptions.isOpen
  }
  componentDidMount() {
    this.menu = new MDCSimpleMenu(this.node)
    this.menu.hide()
    this.node.addEventListener('MDCSimpleMenu:cancel', () => {
      this.props.toggleMoreOptions()
    })
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
    if (this.props.moreOptions.isOpen) {
      this.menu.show()
    }
  }
  componentWillUnmount() {
    this.menu.destroy()
  }

  render() {
    const { i, toggleMoreOptions, moreOptions } = this.props
    const { lists } = moreOptions
    return (
      <div className={clsMenuAnchor}>
        <Icon i={i} onClick={toggleMoreOptions} />
        <div className={`${clsMenu}`} tabIndex="-1" ref={n => (this.node = n)}>
          <List className="mdc-simple-menu__items" role="menu">
            {lists.map(l => <ListItem key={l.label} role="menuitem" tabIndex="0">{l.label}</ListItem>)}
          </List>
        </div>
      </div>
    )
  }
}

export default Menu
