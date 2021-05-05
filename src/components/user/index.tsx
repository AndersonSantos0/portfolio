import React from 'react'
import Image from 'next/image'
import { UserContainer } from './style'

const User: React.FC = () => (
  <UserContainer>
    <Image width={300} height={300} src="/profile.jpg" />
  </UserContainer>
)

export default User
