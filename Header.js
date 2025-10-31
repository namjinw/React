import { useState } from 'react'
import '../MainHome/HomeCSS/header.css'
import downicon from './images/icon-down.png'
import topicon from './images/icon-top.png'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const open = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <header className='Homeheader'>
            <div className='linear'>
                <div className='header_upper'>
                    <div className='Link_click_left'>
                        <a href='#'>기업뱅킹</a>
                        <a href='#'>하나카드</a>
                        <a href='#'>은행소개</a>
                        <a href='#'>채용안내</a>
                    </div>
                    <div className='Link_click_right'>
                        <div className='login_click'>
                            <a href='#'>로그인</a>
                            <a href='#'>인증센터</a>
                        </div>
                        <div className='language_click'>
                            <a className='language_a' onClick={open}>Language</a>
                            <img className='language_icon' onClick={open} src={isOpen ? topicon : downicon}/>
                            <ul className={`language_menu ${isOpen ? 'open' : ''}`} >
                                <li><a>한국어</a></li>
                                <li><a>English</a></li>
                                <li><a>日本語</a></li>
                                <li><a>中文</a></li>
                                <li><a>Tieng Viet</a></li>
                            </ul>
                            <div className={`menu-top ${isOpen ? 'open' : ''}`}></div>
                        </div>
                    </div>
                </div>
                <div className='header_lower'></div>
            </div>
            <div className='Line'></div>
        </header>
    )
}