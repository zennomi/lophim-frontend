export default function Actors() {
    return (
        <div className='child-box child-actors'>
            <div className='child-header'>Diễn viên</div>
            <div className='child-actors-list'>
                {/* Only 3 actors for brevity, add more as needed */}
                <div className='v-item'>
                    <a className='v-actor v-actor-medium' href='/dien-vien/david-corenswet.Ai3xP6'>
                        <img
                            alt='David Corenswet'
                            src='https://image.tmdb.org/t/p/w500/mbPxEMEdOEiJK4MrGivrGxB4yUd.jpg'
                        />
                    </a>
                    <div className='info'>
                        <h4 className='item-title lim-2'>
                            <a href='/dien-vien/david-corenswet.Ai3xP6'>David Corenswet</a>
                        </h4>
                    </div>
                </div>
                <div className='v-item'>
                    <a className='v-actor v-actor-medium' href='/dien-vien/rachel-brosnahan.TQzr7d'>
                        <img
                            alt='Rachel Brosnahan'
                            src='https://image.tmdb.org/t/p/w500/vc0P2UslcxTbAJaBHqnSEAkCdiv.jpg'
                        />
                    </a>
                    <div className='info'>
                        <h4 className='item-title lim-2'>
                            <a href='/dien-vien/rachel-brosnahan.TQzr7d'>Rachel Brosnahan</a>
                        </h4>
                    </div>
                </div>
                <div className='v-item'>
                    <a className='v-actor v-actor-medium' href='/dien-vien/nicholas-hoult.kRmK0e'>
                        <img
                            alt='Nicholas Hoult'
                            src='https://image.tmdb.org/t/p/w500/laeAYQVBV9U3DkJ1B4Cn1XhpT8P.jpg'
                        />
                    </a>
                    <div className='info'>
                        <h4 className='item-title lim-2'>
                            <a href='/dien-vien/nicholas-hoult.kRmK0e'>Nicholas Hoult</a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
