import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href='/' className="md:flex gap-2 items-center ml-4">
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="Logo"
          width={32}
          height={32}
          className="hidden md:block"
        />
        <h4 className="text-xl">DOC Collab</h4>
      </Link>
      
      {children}
    </div>
  )
}

export default Header