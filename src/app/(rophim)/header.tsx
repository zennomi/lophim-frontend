'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import logo from './assets/logo.svg';
import { ChevronDown, Search, User, X } from 'lucide-react';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Implement search logic here
            console.log('Searching for:', searchQuery);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
        setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen((open) => !open);
        setIsMenuOpen(false);
    };

    return (
        <header className={cn('fly', isFixed && 'fixed', className)}>
            <div className='header-elements'>
                {/* Mobile Menu Toggle */}
                <div className={cn('for-mobile menu-toggle', isMenuOpen && 'toggled')}>
                    <div className='icon-menu' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {/* Mobile Search Toggle */}
                <div className={cn('for-mobile search-toggle', isSearchOpen && 'toggled')}>
                    <div className='icon-search' onClick={toggleSearch}>
                        <span></span>
                        <span></span>
                        <Search size={18} strokeWidth={2.5} />
                    </div>
                </div>
                {/* Logo */}
                <Link id='logo' title='Rophim' href='/phimhay'>
                    <Image src={logo} alt='RoPhim' width={120} height={40} priority />
                </Link>
                {/* Search Bar */}
                <div id='search' className={isSearchOpen ? 'active' : ''}>
                    <form onSubmit={handleSearch} className='search-elements'>
                        <div className='search-icon'>
                            <Search size={18} strokeWidth={2.5} />
                        </div>
                        <input
                            id='main-search'
                            className='search-input'
                            placeholder='Tìm kiếm phim, diễn viên'
                            autoComplete='off'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <div className='remove-icon' onClick={() => setSearchQuery('')}>
                                <X size={18} strokeWidth={2.5} />
                            </div>
                        )}
                    </form>
                </div>
                {/* Main Navigation and User Section */}
                <div className={cn('el-group', isMenuOpen && 'toggled')}>
                    {/* Main Menu */}
                    <div id='main_menu'>
                        <div className='menu-item'>
                            <Link title='Chủ đề' href='/chu-de'>
                                Chủ Đề
                            </Link>
                        </div>
                        <div className='menu-item menu-item-sub'>
                            <div className='season-dropdown dropdown'>
                                <a>
                                    Thể loại
                                    <ChevronDown size={16} className='ms-2 inline' />
                                </a>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <Link title='Phim lẻ' href='/phim-le'>
                                Phim Lẻ
                            </Link>
                        </div>
                        <div className='menu-item'>
                            <Link title='Phim bộ' href='/phim-bo'>
                                Phim Bộ
                            </Link>
                        </div>
                        <div className='menu-item'>
                            <Link title='Xem Chung' href='/xem-chung'>
                                <span className='new me-2'></span>
                                Xem Chung
                            </Link>
                        </div>
                        <div className='menu-item menu-item-sub'>
                            <div className='season-dropdown dropdown'>
                                <a>
                                    Quốc gia
                                    <ChevronDown size={16} className='ms-2 inline' />
                                </a>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <Link title='Diễn viên' href='/dien-vien'>
                                Diễn Viên
                            </Link>
                        </div>
                        <div className='menu-item'>
                            <Link title='Lịch chiếu' href='/lich-chieu'>
                                Lịch chiếu
                            </Link>
                        </div>
                    </div>
                    <div className='flex-grow-1'></div>
                    {/* App Download */}
                    <div className='app-download'>
                        <div className='dropdown'>
                            <a className='app-download-button'>
                                <div className='inc-icon'>
                                    <svg
                                        id='Pc'
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M10.9998 16.8992C11.1655 16.8992 11.2998 16.7649 11.2998 16.5992V11.5982C11.2998 9.28322 13.1838 7.39922 15.4998 7.39922H18.7998C18.9238 7.39922 19.0446 7.41106 19.1616 7.43327C19.3745 7.47368 19.5998 7.32682 19.5998 7.11012V6.69922C19.5998 6.67022 19.5968 6.64022 19.5918 6.61222C19.2488 4.66722 17.4468 3.19922 15.4008 3.19922H6.79982C4.42882 3.19922 2.49982 5.12822 2.49982 7.49922V12.5982C2.49982 14.9692 4.42882 16.8992 6.79982 16.8992H8.24282L7.86182 19.2492H5.85982C5.44582 19.2492 5.10982 19.5852 5.10982 19.9992C5.10982 20.4132 5.44582 20.7492 5.85982 20.7492H10.7598C11.1738 20.7492 11.5098 20.4132 11.5098 19.9992C11.5098 19.5852 11.1738 19.2492 10.7598 19.2492H9.38082L9.76182 16.8992H10.9998Z'
                                            fill='currentColor'
                                        />
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M17.1912 18.4564C16.7712 18.4564 16.4302 18.1154 16.4302 17.6954C16.4302 17.2754 16.7712 16.9344 17.1912 16.9344C17.6112 16.9344 17.9522 17.2754 17.9522 17.6954C17.9522 18.1154 17.6112 18.4564 17.1912 18.4564ZM18.8002 8.90039H15.5002C14.0362 8.90039 12.8002 10.1364 12.8002 11.5994V18.0994C12.8002 19.5884 14.0112 20.7994 15.5002 20.7994H18.8002C20.2892 20.7994 21.5002 19.5884 21.5002 18.0994V11.5994C21.5002 10.1364 20.2642 8.90039 18.8002 8.90039Z'
                                            fill='#ffffff'
                                        />
                                    </svg>
                                </div>
                                <div className='text text-light'>
                                    <span>Tải ứng dụng</span>
                                    <strong>RoPhim</strong>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* User Section */}
                    <div id='main_user'>
                        <a className='button-user button-login'>
                            <div className='line-center'>
                                <User size={18} className='ms-1' />
                                <span>Thành viên</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className='mobile-menu-overlay' onClick={toggleMenu}>
                    <div className='mobile-menu-content' onClick={(e) => e.stopPropagation()}>
                        {/* Mobile menu content would go here */}
                    </div>
                </div>
            )}
            {/* Search Modal */}
            {isSearchOpen && (
                <div className='search-modal' onClick={toggleSearch}>
                    <div className='search-modal-content' onClick={(e) => e.stopPropagation()}>
                        {/* Search results would go here */}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
