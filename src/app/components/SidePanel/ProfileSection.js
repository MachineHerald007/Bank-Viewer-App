import React from 'react'
import ReactDOM from 'react-dom'
import { Pane, Avatar, Heading } from 'evergreen-ui'

export const ProfilePicture = ({ character }) => {
  return (
    <Avatar
      src={character.class == "HUcast" ? "https://i.ibb.co/z4S7p5S/HUcast.png" : ""}
      name={character.name}
      size={40}
      margin={24}
      marginLeft={8}
    />
  )
}

export function ProfileSection({ character }) {
    return (
        <Pane display="flex">
            <ProfilePicture character={character} />
            <Heading is="h3" marginTop={32} color="#474d66">{character.name}</Heading>
        </Pane>
    )
}