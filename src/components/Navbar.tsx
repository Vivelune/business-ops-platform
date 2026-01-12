import { LogOutIcon, MoonIcon, SettingsIcon, SquareMenu, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'

const Navbar = () => {
  return(
    <nav className='p-4 flex items-center justify-between'>
      {/* collapse button */}
      Collapse
    <div className='flex items-center gap-4'>
        <Link href='/'>
            Workstation
        </Link>
        <MoonIcon/>
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
            <AvatarImage/>
            <AvatarFallback/>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <UserIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Settings
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon className='w-[1.2rem] h-[1.2rem] mr-2'/> Logout
                </DropdownMenuItem>
                
            </DropdownMenuContent>

        </DropdownMenu>



        



    </div>
    </nav>
  )
}

export default Navbar
