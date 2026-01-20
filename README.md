# Blend Wrapper Block for Gradient Stripe

A custom WordPress block that allows content to be blended with a background using CSS `mix-blend-mode`. Designed specifically as a child block for the **Gradient Stripe Block**.

## Background & Context

CSS `mix-blend-mode` only works between sibling elements. In modern WordPress layouts, content is often deeply nested inside column/row structures, which breaks the blending effect when applied to a parent container.

The **Blend Wrapper Block** solves this by:
- Using `position: absolute` to remove itself from the normal layout flow.
- Rendering as a direct sibling to the background canvas.
- Preserving the responsive layout of other content (buttons, grids, etc.) that should not be blended.

## Features

- **Blend Mode Selection**: Supports 15 standard CSS blend modes (Difference, Screen, Multiply, Overlay, etc.).
- **Opacity Control**: Adjust the intensity of the blending effect (0-100%).
- **Responsive Positioning**:
  - Desktop: Top/Left/Transform controls for precise placement.
  - Mobile: Separate overrides for mobile viewports (breakpoint: 896px).
- **Editor Preview**: Real-time visual feedback in the Gutenberg editor with an active mode indicator.

## Installation

1. Copy the `blend-wrapper-block` directory to your WordPress plugins folder (`wp-content/plugins/`).
2. Activate the plugin through the **Plugins** menu in WordPress.

## Usage

1. Add a **Gradient Stripe Block** to your page.
2. Insert the **Blend Wrapper Block** as a child of the Gradient Stripe.
3. Place your content (e.g., a Heading) inside the Blend Wrapper.
4. Use the sidebar settings to adjust the blend mode, opacity, and position.

## Development

Built with `@wordpress/scripts`.

### Available Scripts:
- `npm run build`: Build the block for production.
- `npm run start`: Starts the build for development.
- `npm run format`: Formats the source code.
- `npm run lint:js`: Lints Javascript files.
- `npm run lint:css`: Lints CSS files.

## License

GPL-2.0-or-later
