import Link from 'next/link';

import Actors from '@/components/rophim/actors';
import CommentArea from '@/components/rophim/comment-area';
import EpisodesList from '@/components/rophim/episodes-list';

export default function WatchContainer() {
    return (
        <div className='watch-container'>
            <div className='wc-main'>
                <div className='wm-info'>
                    <div className='v-thumb-l'>
                        <div className='v-thumbnail'>
                            <img
                                alt='Xem Phim Superman Vietsub HD Online - Rophim'
                                loading='lazy'
                                src='https://static.nutscdn.com/vimg/300-0/b987711629ddc4e21645a4e8af96e60d.webp'
                            />
                        </div>
                    </div>
                    <div className='info'>
                        <h2 className='heading-sm media-name'>
                            <Link title='Superman' href='/phim/superman.2oiIHdCZ'>
                                Superman
                            </Link>
                        </h2>
                        <div className='alias-name'>Superman</div>
                        <div className='detail-more'>
                            <div className='hl-tags'>
                                <div className='tag-imdb'>
                                    <span>7.6</span>
                                </div>
                                <div className='tag-model'>
                                    <span className='last'>
                                        <strong>T13</strong>
                                    </span>
                                </div>
                                <div className='tag-classic'>
                                    <span>2025</span>
                                </div>
                                <div className='tag-classic'>
                                    <span>2h 10m</span>
                                </div>
                                <div className='tag-classic'>CAM</div>
                            </div>
                            <div className='hl-tags'>
                                <a className='tag-topic' href='/the-loai/hanh-dong.2xCjTG'>
                                    Hành Động
                                </a>
                                <a className='tag-topic' href='/the-loai/chieu-rap.3679nF'>
                                    Chiếu Rạp
                                </a>
                                <a className='tag-topic' href='/the-loai/dc.GNUW6k'>
                                    DC
                                </a>
                                <a className='tag-topic' href='/the-loai/sieu-anh-hung.OW2M9i'>
                                    Siêu Anh Hùng
                                </a>
                                <a className='tag-topic' href='/the-loai/khoa-hoc.Rqm5ON'>
                                    Khoa Học
                                </a>
                                <a className='tag-topic' href='/the-loai/ky-ao.gVRG25'>
                                    Kỳ Ảo
                                </a>
                                <a className='tag-topic' href='/the-loai/phieu-luu.wca3Bp'>
                                    Phiêu Lưu
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='desc-line'>
                        <div className='description lim-3'>
                            Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản
                            Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark
                            Kent.
                        </div>
                        <Link className='text-primary' href='/phim/superman.2oiIHdCZ'>
                            Thông tin phim{' '}
                            <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
                                {/* lucide-react: ChevronRight */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    style={{ fontSize: '0.9em', marginLeft: 2, marginRight: 8 }}>
                                    <polyline points='9 18 15 12 9 6' />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='wm-episodes'>
                    <EpisodesList />
                </div>
                <CommentArea />
            </div>
            <div className='wc-side'>
                <div className='ws-rate'>
                    <div className='line-center wsr-left gap-3'>
                        <a className='item-v item-rate'>
                            <div className='inc-icon icon-20'>
                                {/* Star Icon */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='32'
                                    height='32'
                                    viewBox='0 0 32 32'
                                    fill='none'>
                                    <path
                                        d='M30.36 14.63C30.94 14.06 31.15 13.23 30.9 12.45C30.65 11.67 29.99 11.12 29.18 11L21.46 9.88C21.46 9.88 21.38 9.85 21.37 9.81L17.92 2.81C17.56 2.08 16.83 1.62 16.01 1.62C15.19 1.62 14.46 2.07 14.1 2.81L10.65 9.81C10.65 9.81 10.6 9.87 10.55 9.88L2.83001 11C2.02001 11.12 1.37001 11.67 1.11001 12.45C0.860006 13.23 1.06001 14.06 1.65001 14.63L7.24001 20.08C7.24001 20.08 7.28001 20.15 7.28001 20.19L5.96001 27.88C5.82001 28.68 6.15001 29.48 6.81001 29.96C7.47001 30.44 8.33001 30.5 9.05001 30.12L15.96 26.49C15.96 26.49 16.04 26.47 16.08 26.49L22.99 30.12C23.3 30.29 23.64 30.37 23.98 30.37C24.42 30.37 24.86 30.23 25.23 29.96C25.89 29.48 26.21 28.68 26.08 27.88L24.76 20.19C24.76 20.19 24.76 20.11 24.8 20.08L30.39 14.63H30.36Z'
                                        fill='currentColor'></path>
                                </svg>
                            </div>
                            <span>Đánh giá</span>
                        </a>
                        <div className='v-line'></div>
                        <a className='item-v item-comment'>
                            <div className='inc-icon icon-20'>
                                {/* MessageCircle Icon from lucide-react */}
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='21'
                                    height='21'
                                    viewBox='0 0 21 21'
                                    fill='none'>
                                    <g clipPath='url(#clip0_281_3026)'>
                                        <path
                                            d='M14.499 0.5H6.50109C3.19363 0.5 0.502686 3.19095 0.502686 6.4984V11.1638C0.502686 14.3596 3.01468 16.9796 6.16784 17.1532V19.9338C6.16784 20.2461 6.42244 20.5 6.73536 20.5C6.88498 20.5 7.02661 20.4407 7.13358 20.3337L7.75875 19.7085C9.40031 18.0666 11.5834 17.1622 13.9054 17.1622H14.499C17.8064 17.1622 20.4974 14.4713 20.4974 11.1638V6.4984C20.4974 3.19095 17.8064 0.5 14.499 0.5ZM6.16784 10.1641C5.4327 10.1641 4.83486 9.56625 4.83486 8.83111C4.83486 8.09597 5.4327 7.49813 6.16784 7.49813C6.90298 7.49813 7.50082 8.09597 7.50082 8.83111C7.50082 9.56625 6.90265 10.1641 6.16784 10.1641ZM10.5 10.1641C9.76488 10.1641 9.16704 9.56625 9.16704 8.83111C9.16704 8.09597 9.76488 7.49813 10.5 7.49813C11.2352 7.49813 11.833 8.09597 11.833 8.83111C11.833 9.56625 11.2348 10.1641 10.5 10.1641ZM14.8322 10.1641C14.0971 10.1641 13.4992 9.56625 13.4992 8.83111C13.4992 8.09597 14.0971 7.49813 14.8322 7.49813C15.5673 7.49813 16.1652 8.09597 16.1652 8.83111C16.1652 9.56625 15.567 10.1641 14.8322 10.1641Z'
                                            fill='currentColor'></path>
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_281_3026'>
                                            <rect width='20' height='20' fill='white' transform='translate(0.5 0.5)' />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span>Bình luận</span>
                        </a>
                    </div>
                    <div className='v-rating'>
                        <div className='ro-rating'>
                            <div className='ro-icon'></div>
                            <span className='point'>8.0</span>
                            <span className='a-rate'>Đánh giá</span>
                        </div>
                    </div>
                </div>
                <div className='ws-actors'>
                    <Actors />
                </div>
                <div className='ws-top'>
                    <div className='child-box child-suggest'>
                        <div className='child-header'>
                            <span>Đề xuất cho bạn</span>
                        </div>
                        <div className='child-content'>
                            <div className='cc-top'>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link className='v-thumbnail' href='/phim/am-anh-dep-xinh.27bQ02F2'>
                                                <img
                                                    alt='Ám Ảnh Đẹp Xinh'
                                                    src='https://static.nutscdn.com/vimg/300-0/4fce0bf5db68bb6af589f5e6a3126488.jpg'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link title='Ám Ảnh Đẹp Xinh' href='/phim/am-anh-dep-xinh.27bQ02F2'>
                                                    Ám Ảnh Đẹp Xinh
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>Pretty Thing</div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T16</strong>
                                                </div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>1h 36m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link className='v-thumbnail' href='/phim/dang-toi-cao.9Av3Dzwe'>
                                                <img
                                                    alt='Đấng Tối Cao'
                                                    src='https://static.nutscdn.com/vimg/300-0/37a154580b4c5b4bf3e51663a417b2e1.jpg'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link title='Đấng Tối Cao' href='/phim/dang-toi-cao.9Av3Dzwe'>
                                                    Đấng Tối Cao
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>Sovereign</div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T18</strong>
                                                </div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>1h 40m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link
                                                className='v-thumbnail'
                                                href='/phim/zombies-4-binh-minh-ma-ca-rong.UcfPser5'>
                                                <img
                                                    alt='ZOMBIES 4: Bình Minh Ma Cà Rồng'
                                                    src='https://static.nutscdn.com/vimg/300-0/043a962d1e2b39e5b39ca4df6ba433c6.jpg'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link
                                                    title='ZOMBIES 4: Bình Minh Ma Cà Rồng'
                                                    href='/phim/zombies-4-binh-minh-ma-ca-rong.UcfPser5'>
                                                    ZOMBIES 4: Bình Minh Ma Cà Rồng
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>
                                                Z-O-M-B-I-E-S 4: Dawn of the Vampires
                                            </div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T13</strong>
                                                </div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>1h 28m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link className='v-thumbnail' href='/phim/madea-le-cuoi-kho-quen.hbhksAsf'>
                                                <img
                                                    alt='Madea: Lễ Cưới Khó Quên'
                                                    src='https://static.nutscdn.com/vimg/300-0/b80fa52ce53b488f3a8ef46e97a7c441.jpg'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link
                                                    title='Madea: Lễ Cưới Khó Quên'
                                                    href='/phim/madea-le-cuoi-kho-quen.hbhksAsf'>
                                                    Madea: Lễ Cưới Khó Quên
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>Madea's Destination Wedding</div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T13</strong>
                                                </div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>1h 42m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link className='v-thumbnail' href='/phim/superman.2oiIHdCZ'>
                                                <img
                                                    alt='Superman'
                                                    src='https://static.nutscdn.com/vimg/300-0/4b3cdd803e3ca867776d04315e013142.webp'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link title='Superman' href='/phim/superman.2oiIHdCZ'>
                                                    Superman
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>Superman</div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T13</strong>
                                                </div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>2h 10m</div>
                                                <div className='tag-small'>CAM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='h-item'>
                                        <div className='v-thumb-m'>
                                            <Link
                                                className='v-thumbnail'
                                                href='/phim/bo-tu-sieu-dang-buoc-di-dau-tien.7QVNq1a6'>
                                                <img
                                                    alt='Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên'
                                                    src='https://static.nutscdn.com/vimg/300-0/8d64bd725d28f1823c4aa207d7fbae86.jpg'
                                                />
                                            </Link>
                                        </div>
                                        <div className='info'>
                                            <h4 className='item-title lim-2'>
                                                <Link
                                                    title='Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên'
                                                    href='/phim/bo-tu-sieu-dang-buoc-di-dau-tien.7QVNq1a6'>
                                                    Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên
                                                </Link>
                                            </h4>
                                            <div className='alias-title lim-1 mb-2'>
                                                The Fantastic Four: First Steps
                                            </div>
                                            <div className='info-line'>
                                                <div className='tag-small'>
                                                    <strong>T13</strong>
                                                </div>
                                                <div className='tag-small'>Sắp chiếu</div>
                                                <div className='tag-small'>2025</div>
                                                <div className='tag-small'>2h 10m</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
