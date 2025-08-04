import { HeartIcon } from 'lucide-react'
import Link from 'next/link'

export const Footer = () => (
  <div className="flex items-center justify-center bg-black text-white">
    <div className="max-w-3xl flex-1 px-4 py-5">
      <p className="flex items-center gap-1 font-medium">
        Made with <HeartIcon className="stroke-red-400" /> by{' '}
        <Link
          href="https://davidsling.in"
          target="_blank"
          className="text-blue-500 underline font-bold"
        >
          davidsling.in
        </Link>
      </p>
    </div>
  </div>
)
