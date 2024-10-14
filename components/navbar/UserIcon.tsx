import { LuUser2 } from 'react-icons/lu'
import Image from 'next/image'

import { fetchProfileImage } from '@/utils/actions'

async function UserIcon() {
  const profileImage = await fetchProfileImage()

  if (profileImage)
    return (
      <Image
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="profile image"
        height={100}
        width={100}
      />
    )
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
}

export default UserIcon
