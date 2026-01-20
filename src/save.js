import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blendMode,
        opacity,
        positionTop,
        positionLeft,
        transformX,
        transformY,
        positionTopMobile,
        positionLeftMobile,
        transformXMobile,
        transformYMobile,
    } = attributes;

    const hasMobileSettings = positionTopMobile || positionLeftMobile || transformXMobile || transformYMobile;

    const blockProps = useBlockProps.save({
        style: {
            position: 'absolute',
            top: positionTop,
            left: positionLeft,
            transform: `translate(${transformX}, ${transformY})`,
            mixBlendMode: blendMode,
            opacity: opacity / 100,
            zIndex: 2,
            ...(hasMobileSettings && {
                '--blend-mobile-top': positionTopMobile || positionTop,
                '--blend-mobile-left': positionLeftMobile || positionLeft,
                '--blend-mobile-transform-x': transformXMobile || transformX,
                '--blend-mobile-transform-y': transformYMobile || transformY,
            }),
        },
        ...(hasMobileSettings && {
            'data-mobile-top': positionTopMobile ? 'true' : null,
            'data-mobile-left': positionLeftMobile ? 'true' : null,
            'data-mobile-transform-x': transformXMobile ? 'true' : null,
            'data-mobile-transform-y': transformYMobile ? 'true' : null,
        }),
    });

    return (
        <div {...blockProps}>
            <InnerBlocks.Content />
        </div>
    );
}
