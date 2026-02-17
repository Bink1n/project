// Video Modal Functionality
class VideoModal {
    constructor() {
        this.modals = new Map();
        this.init();
    }
    
    init() {
        // Create modal for each video button
        document.querySelectorAll('.video-btn').forEach(button => {
            const videoId = button.getAttribute('data-video-id');
            const videoSrc = button.getAttribute('data-video-src');
            const videoTitle = button.getAttribute('data-video-title') || 'Our Memories';
            
            if (videoSrc) {
                this.createModal(videoId, videoSrc, videoTitle);
                button.addEventListener('click', () => this.openModal(videoId));
            }
        });
    }
    
    createModal(videoId, videoSrc, videoTitle) {
        // Create modal structure
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.id = `video-modal-${videoId}`;
        
        modal.innerHTML = `
            <div class="video-container">
                <button class="video-close">×</button>
                <div class="video-loading"></div>
                <video controls>
                    <source src="${videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-title">${videoTitle}</div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Get elements
        const videoElement = modal.querySelector('video');
        const closeBtn = modal.querySelector('.video-close');
        const loading = modal.querySelector('.video-loading');
        const container = modal.querySelector('.video-container');
        
        // Store modal reference
        this.modals.set(videoId, {
            modal,
            video: videoElement,
            loading
        });
        
        // Event listeners
        closeBtn.addEventListener('click', () => this.closeModal(videoId));
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(videoId);
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal(videoId);
            }
        });
        
        // Video loading
        videoElement.addEventListener('loadstart', () => {
            loading.style.display = 'block';
        });
        
        videoElement.addEventListener('canplay', () => {
            loading.style.display = 'none';
        });
        
        // Prevent body scroll when modal is open
        modal.addEventListener('transitionend', () => {
            if (modal.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    openModal(videoId) {
        const modalData = this.modals.get(videoId);
        if (modalData) {
            modalData.modal.classList.add('active');
            modalData.video.play();
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeModal(videoId) {
        const modalData = this.modals.get(videoId);
        if (modalData) {
            modalData.modal.classList.remove('active');
            modalData.video.pause();
            modalData.video.currentTime = 0;
            document.body.style.overflow = '';
        }
    }
    
    closeAllModals() {
        this.modals.forEach((modalData, videoId) => {
            this.closeModal(videoId);
        });
    }
}

// Initialize video modals when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.videoModal = new VideoModal();
});

// Add sparkle effect to video button on click
document.addEventListener('DOMContentLoaded', () => {
    const videoButtons = document.querySelectorAll('.video-btn');
    
    videoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Create multiple sparkles
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('span');
                    sparkle.textContent = '🎬';
                    sparkle.style.position = 'absolute';
                    sparkle.style.left = (e.offsetX + (Math.random() - 0.5) * 40) + 'px';
                    sparkle.style.top = (e.offsetY + (Math.random() - 0.5) * 40) + 'px';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.animation = 'videoSparkle 1s ease-out forwards';
                    sparkle.style.zIndex = '1000';
                    button.style.position = 'relative';
                    button.appendChild(sparkle);
                    
                    setTimeout(() => sparkle.remove(), 1000);
                }, i * 100);
            }
        });
    });
});

// Add video sparkle animation
const videoSparkleStyle = document.createElement('style');
videoSparkleStyle.textContent = `
    @keyframes videoSparkle {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -150%) scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(videoSparkleStyle);

console.log('🎬 Video button functionality loaded! 🎬');