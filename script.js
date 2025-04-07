
document.addEventListener('DOMContentLoaded', function() {
    const visitorCount = Math.floor(Math.random() * (5000 - 4287 + 1)) + 4287;
    const visitorElement = document.querySelector('footer span.text-green-400');
    
    visitorElement.textContent = `#${visitorCount.toString().padStart(6, '0')}`;
    
    const buttons = document.querySelectorAll('.psx-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    const screenshots = document.querySelectorAll('.psx-border.bg-gray-900.p-2');
    screenshots.forEach((shot, index) => {
        setTimeout(() => {
            const loading = shot.querySelector('.psx-loading');
            const text = shot.querySelector('p.text-xs');
            
            if(loading && text) {
                loading.remove();
                text.remove();
                const img = document.createElement('div');
                img.className = 'w-full h-full bg-gray-700 relative overflow-hidden';
                
                const poly1 = document.createElement('div');
                poly1.className = 'absolute w-24 h-24 bg-red-500 top-4 left-4 transform skew-x-12';
                img.appendChild(poly1);
                
                const poly2 = document.createElement('div');
                poly2.className = 'absolute w-16 h-32 bg-blue-500 bottom-4 right-4 transform rotate-12';
                img.appendChild(poly2);
                
                const poly3 = document.createElement('div');
                poly3.className = 'absolute w-32 h-16 bg-green-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
                img.appendChild(poly3);
                
                shot.querySelector('.bg-gray-800').appendChild(img);
            }
        }, 1000 + (index * 500));
    });
});