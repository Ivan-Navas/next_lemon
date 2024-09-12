import React from 'react'
import Image from "next/image";
import { image } from '@/helpers/images'

function LogoForm() {
  return (
    <div className="rounded-l-16  bg-login flex items-center justify-center">
          <div className="w-300 h-300 rounded-50% bg-glass border border-white grid items-center justify-center relative">
            <Image
              className="absolute top-50 left-50"
              src={image.logo}
              alt="LogoImage"
              width={207}
              height={192}
            />
            <Image
              className="w-auto h-auto absolute top-185 left-175"
              src={image.name}
              alt="nameWeb"
              width={100}
              height={100}
            />
          </div>
        </div>
  )
}

export default LogoForm