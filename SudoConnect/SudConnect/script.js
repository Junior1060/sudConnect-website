document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like');
    const dislikeButton = document.querySelector('.dislike');
    const cards = document.querySelectorAll('.card');
  
    let currentCardIndex = 0;
  
    function handleSwipe(action) {
      const currentCard = cards[currentCardIndex];
      const isLike = action === 'like';
      
      // Move the card off-screen
      currentCard.style.transform = isLike ? 'translateX(100%)' : 'translateX(-100%)';
      
      setTimeout(() => {
        // Hide the current card and show the next one
        currentCard.style.display = 'none';
        currentCardIndex++;
        
        if (currentCardIndex < cards.length) {
          cards[currentCardIndex].style.display = 'block';
          cards[currentCardIndex].style.transform = 'translateX(0)';
        }
      }, 300);
    }
  
    likeButton.addEventListener('click', () => handleSwipe('like'));
    dislikeButton.addEventListener('click', () => handleSwipe('dislike'));
  });
  
