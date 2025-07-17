import TopCollection from './top-collection';
import TopSlider from './top-slider';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function PhimHay() {
    return (
        <>
            <TopSlider />
            <TopCollection />
        </>
    );
}
