import React from 'react'
import logo from "../../../assets/logo.svg"
import linkedin from "../../../assets/linkedin.svg"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Nav = () => {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <section className='nav mt-[66px]' >
      <div className="container">
        <div className="nav__wrapper flex justify-between py-[22px]">
          <div className='flex items-center gap-[14px]' >
            <Link><img className='w-[220px] h-[36px] max-w-[220px]' src={logo} alt="" /></Link>
            <Link><img src={linkedin} alt="" /></Link>
          </div>
          <div className='flex items-center gap-[18px]' >
            <select name="language-picker-select" id="language-picker-select" defaultValue={i18n.language} onChange={handleChangeLanguage} className="outline-none" >
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
            </select>

            <ul className='flex items-center gap-[30px] uppercase font-montserrat text-[#424242] font-medium  h-[17px]' >
              <li>
                <Link>{t("nav-1")}</Link>
              </li>
              <li className='text-[#5A47AB] font-semibold' >
                <Link>{t("nav-2")}</Link>
              </li>
              <li>
                <Link>{t("nav-3")}</Link>
              </li>
              <li>
                <Link>{t("nav-4")}</Link>
              </li>
              <li>
                <Link>{t("nav-5")}</Link>
              </li>
              <li>
                <Link>{t("nav-6")}</Link>
              </li>
              <li>
                <Link>{t("nav-7")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nav