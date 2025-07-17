import MoviePopover from '@/components/movie-popover';

import './global.css';
import Header from './header';
import './homepage.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div id='app'>
                <Header />
                {children}
                <MoviePopover />
            </div>
            <div className='focus-backdrop'></div>
        </>
    );
}
