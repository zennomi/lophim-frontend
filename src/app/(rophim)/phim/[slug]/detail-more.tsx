'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { ChevronDown, ChevronUp } from 'lucide-react';

export default function DetailMore() {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <div
                id='toggle-detail'
                className='btn btn-block btn-basic primary-text mb-2'
                onClick={() => setShowDetail((v) => !v)}
                style={{ cursor: 'pointer' }}>
                <span>Thông tin phim</span>
                {showDetail ? (
                    <ChevronUp className='ms-2 inline' size={18} />
                ) : (
                    <ChevronDown className='ms-2 inline' size={18} />
                )}
            </div>
            <div className={cn('detail-more', showDetail && 'show')}>
                {' '}
                {/* show/hide by state */}
                <div className='hl-tags'>
                    <div className='tag-imdb'>
                        <span>7.6</span>
                    </div>
                    <div className='tag-model'>
                        <span className='last'>
                            <strong>T16</strong>
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
                <div className='detail-line'>
                    <div className='de-title d-block mb-2'>Giới thiệu:</div>
                    <div className='description'>
                        Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton
                        trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent.
                    </div>
                </div>
                <div className='detail-line d-flex'>
                    <div className='de-title'>Thời lượng:</div>
                    <div className='de-value'>2h 10m</div>
                </div>
                <div className='detail-line d-flex'>
                    <div className='de-title'>Quốc gia:</div>
                    <div className='de-value'>
                        <span>
                            <a href='/quoc-gia/my.w1rcIP'>Mỹ</a>
                        </span>
                    </div>
                </div>
                <div className='detail-line d-flex'>
                    <div className='de-title'>Networks:</div>
                    <div className='de-value'>
                        <span>
                            <a title='DC Universe' href='/network/dc-universe.35lMzW'>
                                DC Universe
                            </a>
                        </span>
                    </div>
                </div>
                <div className='detail-line d-flex'>
                    <div className='de-title'>Sản xuất:</div>
                    <div className='de-value'>
                        <span>
                            <a href='/nha-san-xuat/warner-bros-pictures.9NGIiU'>Warner Bros. Pictures</a>,{' '}
                        </span>
                        <span>
                            <a href='/nha-san-xuat/dc-studios.iJ0Bay'>DC Studios</a>
                        </span>
                    </div>
                </div>
                <div className='detail-line d-flex'>
                    <div className='de-title'>Đạo diễn:</div>
                    <div className='de-value'>
                        <span>
                            <a title='Kera Dacy' href='/dao-dien/kera-dacy.YQkKPs'>
                                Kera Dacy
                            </a>
                            ,{' '}
                        </span>
                        <span>
                            <a title='James Gunn' href='/dao-dien/james-gunn.drmERm'>
                                James Gunn
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
