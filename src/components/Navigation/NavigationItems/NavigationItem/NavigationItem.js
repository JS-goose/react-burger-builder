import React from 'react'

export default function NavigationItem(props) {
    return (
        <li>
        <a href="/">{props.children}</a>
      </li>
    )
}
