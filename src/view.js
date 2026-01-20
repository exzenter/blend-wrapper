/**
 * Blend Wrapper Block - Frontend Script
 * 
 * Teleports the blend wrapper to be a direct sibling of the canvas container
 * to ensure mix-blend-mode works correctly without stacking context interference.
 */

const teleportBlendWrappers = () => {
    const wrappers = document.querySelectorAll('.wp-block-gsb-blend-wrapper');

    wrappers.forEach(wrapper => {
        // Find the nearest Gradient Stripe parent
        // We look for the standard block class or the container that holds BOTH the canvas and content
        const stripe = wrapper.closest('.wp-block-gsb-gradient-stripe') ||
            wrapper.closest('[class*="gsb-gradient-stripe"]');

        if (stripe) {
            // Check if it's already a direct child
            if (wrapper.parentElement !== stripe) {
                // Move it to the bottom of the stripe block
                // (This makes it a sibling of gsb-gradient-stripe-container and gsb-gradient-content)
                stripe.appendChild(wrapper);

                // Ensure it's absolutely positioned as intended
                wrapper.style.position = 'absolute';
                wrapper.style.display = 'block';
            }
        }
    });
};

// Run on load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    teleportBlendWrappers();
} else {
    document.addEventListener('DOMContentLoaded', teleportBlendWrappers);
}

// Also watch for DOM changes (useful for some page builders or dynamic loading)
const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
            shouldUpdate = true;
            break;
        }
    }
    if (shouldUpdate) {
        teleportBlendWrappers();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
