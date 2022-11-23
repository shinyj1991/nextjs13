import Image from 'next/image'
import monstera2 from '#/images/monstera-2.png'

export default async () => {
  return (
    <div className="index-page">
      <div className="index-visual">
        <Image className="monstera-1" src={monstera2} alt="" />
        <div className="greeting">
          Welcome to my website.
          <br />
          Please scroll down.
        </div>
      </div>
      <div className="index-introduce"></div>
    </div>
  )
}
