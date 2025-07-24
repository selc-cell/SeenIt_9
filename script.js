document.addEventListener('DOMContentLoaded', () => {
const commentInput = document.getElementById('comment-input');
const submitCommentBtn = document.getElementById('submit-comment-btn');
const commentsList = document.getElementById('comments-list');

// Event Listener for Comment Submission
submitCommentBtn.addEventListener('click', () => {
const commentText = commentInput.value.trim(); // Get comment text and remove leading/trailing whitespace

if (commentText) { // Only proceed if comment is not empty
// Create new comment element
const newCommentItem = document.createElement('div');
newCommentItem.classList.add('comment-item');

// Construct the HTML for the new comment
newCommentItem.innerHTML = `
<div class="avatar-placeholder comment-avatar"></div>
<div class="comment-content">
<div class="comment-header">
<span class="comment-username">Ahad</span>
<span class="comment-time">JUST NOW</span>
</div>
<p class="comment-text">${commentText}</p>
<div class="comment-actions">
<span class="icon-text">
<img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/thumb_up_alt/baseline_thumb_up_alt_black_24dp.png" alt="Like">
</span>
<span class="icon-text">
<img src="https://raw.githubusercontent.com/google/material-design-icons/master/png/thumb_down_alt/baseline_thumb_down_alt_black_24dp.png" alt="Dislike">
</span>
<button class="reply-button">Reply</button>
</div>
</div>
`;

// Dynamic Display: Add the new comment to the top of the comments list
commentsList.prepend(newCommentItem);

// Clear the textarea after submission
commentInput.value = '';
}
});

// Optional: Add an input event listener to enable/disable button if desired (not strictly required by criteria but good UX)
commentInput.addEventListener('input', () => {
if (commentInput.value.trim().length > 0) {
submitCommentBtn.disabled = false; // Enable button if there's text
submitCommentBtn.style.opacity = 1;
submitCommentBtn.style.cursor = 'pointer';
} else {
submitCommentBtn.disabled = true; // Disable button if no text
submitCommentBtn.style.opacity = 0.5;
submitCommentBtn.style.cursor = 'not-allowed';
}
});

// Initialize button state on page load
submitCommentBtn.disabled = true;
submitCommentBtn.style.opacity = 0.5;
submitCommentBtn.style.cursor = 'not-allowed';
});