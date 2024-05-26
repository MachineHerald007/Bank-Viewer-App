import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, Avatar, Heading } from 'evergreen-ui'

export const ProfilePicture = ({ character }) => {
  return (
    <Avatar
      src={character.img}
      name={character.name}
      size={40}
      margin={24}
    />
  )
}

export function ProfileSection({ character }) {
    return (
        <Pane display="flex">
            <ProfilePicture character={character} />
            <Heading is="h3" marginTop={32}>{character.name}</Heading>
        </Pane>
    )
}