'use client'

import { useState } from 'react'
import { LuCheck, LuCopy, LuShare2 } from 'react-icons/lu'
import {
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share'
import copy from 'clipboard-copy'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string
  name: string
}) {
  const [copied, setCopied] = useState(false)
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL
  const shareLink = `${url}/properties/${propertyId}`

  const handleCopyClick = async () => {
    await copy(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <Button
          variant="round"
          size="round"
          onClick={handleCopyClick}
          className="flex items-center justify-center"
        >
          {copied ? (
            <LuCheck className="h-4 w-4 text-green-500" />
          ) : (
            <LuCopy className="h-4 w-4" />
          )}
        </Button>
      </PopoverContent>
    </Popover>
  )
}

export default ShareButton
