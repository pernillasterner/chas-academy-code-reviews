import React from 'react'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from '@radix-ui/react-icons'

function Footer() {
  return (
    <div className='flex gap-12 p-6 px-16 border-t border-gray-200 justify-center'>
    <a href="https://github.com/lisaemilsson" target='_blank' className='flex items-center gap-2'>
      <GitHubLogoIcon width={20} height={20}/>github
    </a>
    <a href="https://www.linkedin.com/in/lisa-emilson-6bbaa8224/" target='_blank' className='flex items-center gap-2'>
      <LinkedInLogoIcon width={20} height={20}/>Linkedin
    </a>
    <a href="https://www.instagram.com/lisaemilson/" target='_blank' className='flex items-center gap-2'>
      <InstagramLogoIcon width={20} height={20}/>Instagram
    </a>
</div>
  )
}

export default Footer