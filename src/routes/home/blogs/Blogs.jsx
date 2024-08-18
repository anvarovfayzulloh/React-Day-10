import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import blog1 from "../../../assets/blogs-1.png"
import blog2 from "../../../assets/blogs-2.png"

const Blogs = () => {
  const { t, i18n } = useTranslation()



  return (
    <section>
      <div className="container">
        <div className="blogs__wrapper">
          <div className='categories__wrapper flex items-center gap-[52px] font-montserrat font-bold text-lg text-[#424242]' >
            <Link className={`text-[#D05270] font-montserrat font-bold text-2xl h-23px border-[#D05270] border-b px-[16px] py-[6px] `} >
              {t("blogs-1")}
            </Link>
            <Link>
              {t("blogs-2")}
            </Link>
            <Link>
              {t("blogs-3")}
            </Link>
            <Link>
              {t("blogs-4")}
            </Link>
            <Link>
              {t("blogs-5")}
            </Link>
            <Link>
              {t("blogs-6")}
            </Link>
            <Link>
              {t("blogs-7")}
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-x-[20px] gap-y-[75px] pt-[124px] pb-[320px]' >
            <Link to={"/blog"} >
              <img src={blog1} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
            <Link to={"/blog"} >
              <img src={blog2} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
            <Link to={"/blog"} >
              <img src={blog1} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
            <Link to={"/blog"} >
              <img src={blog2} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
            <Link to={"/blog"} >
              <img src={blog1} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
            <Link to={"/blog"} >
              <img src={blog2} alt="" />
              <p className='mt-[16px] font-montserrat text-sm h-[17px] text-[#424242] font-semibold' >
                {t("blogs-8")}
              </p>
              <p className='text-[#D05270] font-montserrat font-semibold text-2xl  pt-[14px] pb-[12px]' >
                {t("blogs-9")}
              </p>
              <p className=' pb-[30px] font-montserrat font-normal text-base text-[#424242]' >
                {t("blogs-10")}
              </p>
              <Link className='text-[#D05270] font-montserrat font-medium text-lg pb-[5px] border-b border-[#D05270] ' >
                {t("blogs-11")}
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs