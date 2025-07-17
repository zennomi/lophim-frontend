'use client';

import { useState } from 'react';

import Link from 'next/link';

import EpisodesList from '@/components/rophim/episodes-list';
import { cn } from '@/lib/utils';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export default function ContentGap() {
    const [activeTab, setActiveTab] = useState<'episodes' | 'suggestion'>('episodes');

    return (
        <div className='content-gap'>
            <div className='cg-body'>
                <TabsPrimitive.Root value={activeTab} onValueChange={setActiveTab as any} className='cg-tabs'>
                    <TabsPrimitive.List className='v-tabs nav nav-tabs mb-0 flex' role='tablist'>
                        <TabsPrimitive.Trigger
                            value='episodes'
                            className={cn('nav-link', activeTab === 'episodes' && 'active')}
                            role='tab'
                            aria-selected={activeTab === 'episodes'}
                            tabIndex={0}>
                            Tập phim
                        </TabsPrimitive.Trigger>
                        <TabsPrimitive.Trigger
                            value='suggestion'
                            className={cn('nav-link', activeTab === 'suggestion' && 'active')}
                            role='tab'
                            aria-selected={activeTab === 'suggestion'}
                            tabIndex={0}>
                            Đề xuất
                        </TabsPrimitive.Trigger>
                    </TabsPrimitive.List>
                    <TabsPrimitive.Content value='episodes' className='tab-content fade tab-pane active show'>
                        <EpisodesList />
                    </TabsPrimitive.Content>
                    <TabsPrimitive.Content value='suggestion' className='tab-content fade tab-pane active show'>
                        <div className='cg-body-box is-suggest'>
                            <div className='box-header'>
                                <div className='heading-md mb-0'>Có thể bạn sẽ thích</div>
                            </div>
                            <div className='box-body'>
                                <div className='cards-grid-wrapper de-suggest'>
                                    {/* Only 3 suggestions for brevity */}
                                    <div className='sw-item'>
                                        <Link
                                            className='v-thumbnail'
                                            href='/phim/bo-tu-sieu-dang-buoc-di-dau-tien.7QVNq1a6'>
                                            <div className='pin-new'>
                                                <div className='line-center line-coming'>
                                                    <strong>Sắp chiếu</strong>
                                                </div>
                                            </div>
                                            <div>
                                                <img
                                                    alt='Xem Phim Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên Vietsub HD Online - Rophim'
                                                    loading='lazy'
                                                    src='https://static.nutscdn.com/vimg/300-0/8d64bd725d28f1823c4aa207d7fbae86.jpg'
                                                />
                                            </div>
                                        </Link>
                                        <div className='info'>
                                            <h4 className='item-title lim-1'>
                                                <Link
                                                    title='Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên'
                                                    href='/phim/bo-tu-sieu-dang-buoc-di-dau-tien.7QVNq1a6'>
                                                    Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên
                                                </Link>
                                            </h4>
                                            <h4 className='alias-title lim-1'>
                                                <Link
                                                    title='The Fantastic Four: First Steps'
                                                    href='/phim/bo-tu-sieu-dang-buoc-di-dau-tien.7QVNq1a6'>
                                                    The Fantastic Four: First Steps
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='sw-item'>
                                        <Link
                                            className='v-thumbnail'
                                            href='/phim/zombies-4-binh-minh-ma-ca-rong.UcfPser5'>
                                            <div className='pin-new m-pin-new'>
                                                <div className='line-center line-pd'>P.Đề</div>
                                            </div>
                                            <div>
                                                <img
                                                    alt='Xem Phim ZOMBIES 4: Bình Minh Ma Cà Rồng Vietsub HD Online - Rophim'
                                                    loading='lazy'
                                                    src='https://static.nutscdn.com/vimg/300-0/e9b09fda8580902e4705d28a24382b55.jpg'
                                                />
                                            </div>
                                        </Link>
                                        <div className='info'>
                                            <h4 className='item-title lim-1'>
                                                <Link
                                                    title='ZOMBIES 4: Bình Minh Ma Cà Rồng'
                                                    href='/phim/zombies-4-binh-minh-ma-ca-rong.UcfPser5'>
                                                    ZOMBIES 4: Bình Minh Ma Cà Rồng
                                                </Link>
                                            </h4>
                                            <h4 className='alias-title lim-1'>
                                                <Link
                                                    title='Z-O-M-B-I-E-S 4: Dawn of the Vampires'
                                                    href='/phim/zombies-4-binh-minh-ma-ca-rong.UcfPser5'>
                                                    Z-O-M-B-I-E-S 4: Dawn of the Vampires
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className='sw-item'>
                                        <Link
                                            className='v-thumbnail'
                                            href='/phim/dora-truy-tim-kho-bau-sol-dorado.cPDDRZKG'>
                                            <div className='pin-new m-pin-new'>
                                                <div className='line-center line-pd'>P.Đề</div>
                                            </div>
                                            <div>
                                                <img
                                                    alt='Xem Phim Dora Truy Tìm Kho Báu Sol Dorado Vietsub HD Online - Rophim'
                                                    loading='lazy'
                                                    src='https://static.nutscdn.com/vimg/300-0/0aa84076bf69858b3ea97856f8a1013b.jpg'
                                                />
                                            </div>
                                        </Link>
                                        <div className='info'>
                                            <h4 className='item-title lim-1'>
                                                <Link
                                                    title='Dora Truy Tìm Kho Báu Sol Dorado'
                                                    href='/phim/dora-truy-tim-kho-bau-sol-dorado.cPDDRZKG'>
                                                    Dora Truy Tìm Kho Báu Sol Dorado
                                                </Link>
                                            </h4>
                                            <h4 className='alias-title lim-1'>
                                                <Link
                                                    title='Dora and the Search for Sol Dorado'
                                                    href='/phim/dora-truy-tim-kho-bau-sol-dorado.cPDDRZKG'>
                                                    Dora and the Search for Sol Dorado
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsPrimitive.Content>
                </TabsPrimitive.Root>
            </div>
        </div>
    );
}
