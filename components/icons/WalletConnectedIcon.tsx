import React from 'react'

export interface WalletConnectedIconProps {
  color?: string
  /** xs: 12px; sm: 16px; md: 20px; lg: 24px; xl: 32px (default: xs) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export default function WalletConnectedIcon({
  color,
  size = 'xs',
}: WalletConnectedIconProps) {
  const _size = size === 'xs'
    ? 12
    : size === 'sm'
    ? 16
    : size === 'md'
    ? 20
    : size === 'lg'
    ? 24
    : size === 'xl'
    ? 32 : 12

  return (
    <svg
      width={_size}
      height={_size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.78533 2.07422C1.39024 2.07422 1.07104 2.39342 1.07104 2.7885V5.5V19.2171C1.07104 19.6122 1.39024 19.9314 1.78533 19.9314H18.2139C18.609 19.9314 18.9282 19.6122 18.9282 19.2171V7.71708C18.9282 7.27328 18.5684 6.91351 18.1246 6.91351C17.6808 6.91351 17.321 7.27328 17.321 7.71708V8.14565H9.64247C9.24738 8.14565 8.92819 8.46485 8.92819 8.85993V13.1456C8.92819 13.5407 9.24738 13.8599 9.64247 13.8599H17.321V18.3242H2.67819V5.5V3.68136H5.99994H11.1964C11.6402 3.68136 11.9999 3.32159 11.9999 2.87779C11.9999 2.43399 11.6402 2.07422 11.1964 2.07422H5.99994H1.78533ZM10.3568 12.4314H17.321V9.57422H10.3568V12.4314ZM11.779 11.6341C11.6115 11.4667 11.5175 11.2396 11.5175 11.0028C11.5175 10.766 11.6115 10.5389 11.779 10.3714C11.9464 10.204 12.1735 10.1099 12.4103 10.1099C12.6471 10.1099 12.8742 10.204 13.0417 10.3714C13.2091 10.5389 13.3032 10.766 13.3032 11.0028C13.3032 11.2396 13.2091 11.4667 13.0417 11.6341C12.8742 11.8016 12.6471 11.8956 12.4103 11.8956C12.1735 11.8956 11.9464 11.8016 11.779 11.6341Z"
        fill={color}
      />
      <path
        d="M20.6074 0L19.2838 0C19.2257 0 19.1722 0.0267854 19.1387 0.0736604L16.7614 3.35045L15.6476 1.81473C15.6311 1.79173 15.6093 1.77304 15.584 1.76022C15.5588 1.7474 15.5308 1.74083 15.5025 1.74107H14.1789C14.0338 1.74107 13.9489 1.90625 14.0338 2.02455L16.4713 5.38839C16.5046 5.43406 16.5483 5.4712 16.5987 5.49681C16.6491 5.52241 16.7049 5.53576 16.7614 5.53576C16.818 5.53576 16.8737 5.52241 16.9242 5.49681C16.9746 5.4712 17.0183 5.43406 17.0516 5.38839L20.7525 0.283483C20.8373 0.165179 20.7525 0 20.6074 0Z"
        fill={color}
      />
    </svg>
  )
}
