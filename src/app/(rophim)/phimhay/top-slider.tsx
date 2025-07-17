'use client';

import React from 'react';

import Link from 'next/link';

import { Heart, Info, Play } from 'lucide-react';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Sample movie data
const movies = [
    {
        id: 1,
        title: 'Thế Giới Khủng Long: Tái Sinh',
        alias: 'Jurassic World Rebirth',
        slug: 'the-gioi-khung-long-tai-sinh',
        image: 'https://static.nutscdn.com/vimg/1920-0/5405bf6a627e5bdcc9bc6acac645e6a4.webp',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/151b39ab91873a620e3c78fab5686d23.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/26a53600a57c7a4497a22606eecbd9b3.webp',
        imdb: '6.2',
        rating: 'T16',
        year: '2025',
        duration: '2h 10m',
        quality: 'CAM',
        genres: ['Chiếu Rạp', 'Gay Cấn', 'Khoa Học', 'Bí Ẩn', 'Phiêu Lưu', 'Giả Tưởng'],
        description:
            'Phim lấy bối cảnh 5 năm sau phần phim Thế Giới Khủng Long: Lãnh Địa (Jurassic World: Dominion). Thế Giới Khủng Long: Tái Sinh mở ra một chương mới đầy tính hành động, chứng kiến một đội khai thác chạy đua đến nơi nguy hiểm nhất trên Trái Đất.'
    },
    {
        id: 2,
        title: 'Superman',
        alias: 'Superman',
        slug: 'superman',
        image: 'https://static.nutscdn.com/vimg/1920-0/161625de0f2c34ec4795140b44bed834.webp',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/ef39e6430dd40aae938a87909bdcbbe1.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/161625de0f2c34ec4795140b44bed834.webp',
        imdb: '7.6',
        rating: 'T16',
        year: '2025',
        duration: '2h 10m',
        quality: 'CAM',
        genres: ['Hành Động', 'Chiếu Rạp', 'DC', 'Siêu Anh Hùng', 'Khoa Học', 'Kỳ Ảo', 'Phiêu Lưu'],
        description:
            'Superman, một phóng viên tập sự ở Metropolis, bắt đầu cuộc hành trình dung hòa di sản Krypton trong bản thân mình với quá trình trưởng thành của con người với tư cách là Clark Kent.'
    },
    {
        id: 3,
        title: 'M3GAN 2.0',
        alias: 'M3GAN 2.0',
        slug: 'm3gan-20',
        image: 'https://static.nutscdn.com/vimg/1920-0/2621f2a8a2da537da8243d0435cbd0da.webp',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/44386cc9a8fd46755e4984ee247c5697.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/2621f2a8a2da537da8243d0435cbd0da.webp',
        imdb: '6.3',
        rating: 'T18',
        year: '2025',
        duration: '1h 40m',
        quality: '4K',
        genres: ['Chiếu Rạp', 'Gay Cấn', 'Kinh Dị', 'Khoa Học', 'Tâm Lý', 'Viễn Tưởng'],
        description:
            'MEGAN 2.0 lấy bối cảnh 2 năm sau các sự kiện ở phần 1. Lúc này, Gemma phát hiện công nghệ sản xuất MEGAN đã bị đánh cắp.'
    },
    {
        id: 4,
        title: 'Bí Kíp Luyện Rồng',
        alias: 'How to Train Your Dragon',
        slug: 'bi-kip-luyen-rong',
        image: 'https://static.nutscdn.com/vimg/1920-0/4e4760c4503bc33daa949d163119698e.jpg',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/af56b3ea09c88ca71ccb9ddc8c40042e.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/ecd581a3c6ebadbad901ae1301e5e1d5.jpg',
        imdb: '8.0',
        rating: 'T13',
        year: '2025',
        duration: '1h 50m',
        quality: '4K',
        genres: ['Hành Động', 'Chiếu Rạp', 'Gia Đình', 'Kỳ Ảo', 'Viễn Tưởng', 'Phiêu Lưu'],
        description:
            'Câu chuyện về một chàng trai trẻ với ước mơ trở thành thợ săn rồng, nhưng định mệnh lại đưa đẩy anh đến tình bạn bất ngờ với một chú rồng.'
    },
    {
        id: 5,
        title: 'Bộ 5 Siêu Đẳng Cấp',
        alias: 'Hi-Five',
        slug: 'bo-5-sieu-dang-cap',
        image: 'https://static.nutscdn.com/vimg/1920-0/8d9c68e67801743356391c099831aff3.jpg',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/d71987a8894a4fcf65a49695f42bffc4.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/98a5b22913fbf7a1505ba29fdfd70353.webp',
        imdb: '7.0',
        rating: 'T13',
        year: '2025',
        duration: '2h 00m',
        quality: '',
        genres: ['Hành Động', 'Chiếu Rạp', 'Khoa Học', 'Hài', 'Viễn Tưởng'],
        description:
            'Chuyện phim xoay quanh năm con người xa lạ, vô tình sở hữu các siêu năng lực sau khi được cấy ghép nội tạng từ những người hiến tặng bí ẩn.'
    },
    {
        id: 6,
        title: 'Từ Vũ Trụ John Wick: Ballerina',
        alias: 'Ballerina',
        slug: 'tu-vu-tru-john-wick-ballerina',
        image: 'https://static.nutscdn.com/vimg/1920-0/a00ecdaed594e51e90b965b24c5ad281.webp',
        titleImage: 'https://static.nutscdn.com/vimg/0-260/ebfb0189613d2ccfc8734c2efbd9de5e.png',
        thumbnail: 'https://static.nutscdn.com/vimg/150-0/a62c136aa493ba29aa54ae0834fc9721.webp',
        imdb: '7.0',
        rating: 'T16',
        year: '2025',
        duration: '2h 05m',
        quality: '4K',
        genres: ['Hành Động', 'Chiếu Rạp', 'Gay Cấn', 'Hình Sự', 'Phiêu Lưu'],
        description:
            'Lấy bối cảnh giữa sự kiện của Sát thủ John Wick: Phần 3 – Chuẩn Bị Chiến Tranh, bộ phim Từ Vũ Trụ John Wick: Ballerina theo chân Eve Macarro.'
    }
];

const TopSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

    return (
        <div id='top_slide' className='relative'>
            <div className='slide-wrapper top-slide-wrap'>
                {/* Main Slider */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
                    effect='fade'
                    fadeEffect={{
                        crossFade: true
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className='top-slide-main'>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className='slide-elements relative h-[600px] overflow-hidden'>
                                <Link href={`/phim/${movie.slug}`} className='slide-url absolute inset-0 z-10' />

                                {/* Background Image */}
                                <div
                                    className='background-fade absolute inset-0 bg-cover bg-center'
                                    style={{ backgroundImage: `url(${movie.image})` }}
                                />

                                {/* Cover Image */}
                                <div className='cover-fade absolute inset-0'>
                                    <div className='cover-image h-full'>
                                        <img
                                            className='fade-in visible h-full w-full object-cover'
                                            title={movie.title}
                                            loading='lazy'
                                            src={movie.image}
                                            alt={movie.title}
                                        />
                                    </div>
                                </div>

                                {/* Content Overlay */}
                                <div className='safe-area'>
                                    <div className='slide-content'>
                                        <div className='media-item'>
                                            {/* Title Image */}
                                            <div className='media-title-image mb-4'>
                                                <Link href={`/phim/${movie.slug}`}>
                                                    <img
                                                        alt={movie.title}
                                                        src={movie.titleImage}
                                                        className='max-h-20 object-contain'
                                                    />
                                                </Link>
                                            </div>
                                            {/* Title */}
                                            <h2 className='media-title hidden'>
                                                <Link href={`/phim/${movie.slug}`} className=''>
                                                    {movie.title}
                                                </Link>
                                            </h2>
                                            {/* Alias Title */}
                                            <h3 className='media-alias-title'>
                                                <Link href={`/phim/${movie.slug}`} className=''>
                                                    {movie.alias}
                                                </Link>
                                            </h3>

                                            {/* Tags */}
                                            <div className='hl-tags'>
                                                <div className='tag-imdb'>
                                                    <span>{movie.imdb}</span>
                                                </div>
                                                {movie.quality && (
                                                    <div className='tag-quality'>
                                                        <span>{movie.quality}</span>
                                                    </div>
                                                )}
                                                <div className='tag-model'>
                                                    <span>{movie.rating}</span>
                                                </div>
                                                <div className='tag-classic'>
                                                    <span>{movie.year}</span>
                                                </div>
                                                <div className='tag-classic'>
                                                    <span>{movie.duration}</span>
                                                </div>
                                            </div>

                                            {/* Genre Tags */}
                                            <div className='hl-tags mb-4 flex flex-wrap gap-2'>
                                                {movie.genres.map((genre, index) => (
                                                    <Link
                                                        key={index}
                                                        href={`/the-loai/${genre.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className='tag-topic rounded bg-gray-700 px-2 py-1 text-sm transition-colors hover:bg-gray-600'>
                                                        {genre}
                                                    </Link>
                                                ))}
                                            </div>

                                            {/* Description */}
                                            <div className='description lim-3 mb-6 line-clamp-3 text-gray-300'>
                                                {movie.description}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className='touch'>
                                                <Link href={`/xem-phim/${movie.slug}`} className='button-play'>
                                                    <Play className='h-6 w-6' fill='currentColor' />
                                                </Link>

                                                <div className='touch-group'>
                                                    <a className='item'>
                                                        <div className='inc-icon icon-20'>
                                                            <Heart className='h-5 w-5' />
                                                        </div>
                                                    </a>
                                                    <Link href={`/phim/${movie.slug}`} className='item'>
                                                        <div className='inc-icon icon-20'>
                                                            <Info className='h-5 w-5' />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Thumbnail Slider */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Navigation, Pagination, Thumbs]}
                    spaceBetween={5}
                    slidesPerView={6}
                    watchSlidesProgress={true}
                    className='top-slide-small mt-4'>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <img
                                alt={movie.title}
                                loading='lazy'
                                src={movie.thumbnail}
                                className='h-16 w-full cursor-pointer rounded object-cover opacity-60 transition-opacity hover:opacity-100'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopSlider;
