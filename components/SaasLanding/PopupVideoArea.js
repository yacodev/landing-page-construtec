import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
  ssr: false,
});

const PopupVideoArea = ({ srcVideo }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='popup-video-area bg-1'>
      <ModalVideo
        channel='youtube'
        isOpen={!isOpen}
        videoId={srcVideo}
        onClose={() => setIsOpen(!isOpen)}
      />

      <div className='d-table'>
        <div className='d-table-cell'>
          <div className='container'>
            <div className='popup-video'>
              <div className='video-btn'>
                <Link href='#play-video'>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                    className='popup-youtube'
                  >
                    <i className='las la-play'></i>
                    <span className='ripple pinkBg'></span>
                    <span className='ripple pinkBg'></span>
                    <span className='ripple pinkBg'></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupVideoArea;
