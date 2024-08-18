import React from 'react'
import Nav from '../home/nav/Nav'
import artwork from "../../assets/artwork.svg"
import blog1 from "../../assets/blogs-1.png"
import { useTranslation } from 'react-i18next'

const Blog = () => {

  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="blog__wrapper pt-[113px]">
            <img className='w-full' src={blog1} alt="" />
          </div>
          <div className='pt-[176px]' >
            <h3 className='text-[#3A0CA3] font-montserrat font-bold text-4xl h-[50px]' >
              {t("blog-1")}
            </h3>
            <p className='pt-[70px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-4")}
            </p>
            <p className=' py-[35px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-5")}
            </p>
            <p className='text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-6")}
            </p>
          </div>
          <div className='pt-[176px]' >
            <h2 className='text-[#3A0CA3] font-montserrat font-bold text-3xl h-[50px]' >
              {t("blog-2")}
            </h2>
            <p className='pt-[70px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-4")}
            </p>
            <p className=' py-[35px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-5")}
            </p>
            <p className='text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-6")}
            </p>
          </div>
          <div className='pt-[176px]' >
            <h2 className='text-[#3A0CA3] font-montserrat font-bold text-2xl h-[50px]' >
              {t("blog-3")}
            </h2>
            <p className='pt-[36px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-4")}
            </p>
            <p className=' py-[35px] text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-5")}
            </p>
            <p className='text-[#424242] font-montserrat font-medium text-2xl' >
              {t("blog-6")}
            </p>
          </div>
        </div>
      </section>
      <div className='flex items-center justify-center mb-[100px] mt-[1120px]' >
        <img src={artwork} alt="" />
      </div>
    </>
  )
}

export default Blog