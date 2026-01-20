<?php
/**
 * Plugin Name: Blend Wrapper Block
 * Description: Positioniert Content absolut mit mix-blend-mode für Gradient Stripe
 * Version: 1.0.0
 * Author: Your Name
 */

function gsb_blend_wrapper_register_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'gsb_blend_wrapper_register_block' );
