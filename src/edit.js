import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InnerBlocks,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    RangeControl,
    __experimentalUnitControl as UnitControl,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
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

    const blockProps = useBlockProps({
        style: {
            position: 'absolute',
            top: positionTop,
            left: positionLeft,
            transform: `translate(${transformX}, ${transformY})`,
            mixBlendMode: blendMode,
            opacity: opacity / 100,
            zIndex: 2,
            pointerEvents: 'none', // Verhindert Klicks im Editor
        },
    });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Blend Settings', 'blend-wrapper-block')} initialOpen={true}>
                    <SelectControl
                        label="Blend Mode"
                        value={blendMode}
                        options={[
                            { label: 'Difference', value: 'difference' },
                            { label: 'Screen', value: 'screen' },
                            { label: 'Multiply', value: 'multiply' },
                            { label: 'Overlay', value: 'overlay' },
                            { label: 'Lighten', value: 'lighten' },
                            { label: 'Darken', value: 'darken' },
                            { label: 'Color Dodge', value: 'color-dodge' },
                            { label: 'Color Burn', value: 'color-burn' },
                            { label: 'Hard Light', value: 'hard-light' },
                            { label: 'Soft Light', value: 'soft-light' },
                            { label: 'Exclusion', value: 'exclusion' },
                            { label: 'Hue', value: 'hue' },
                            { label: 'Saturation', value: 'saturation' },
                            { label: 'Color', value: 'color' },
                            { label: 'Luminosity', value: 'luminosity' },
                        ]}
                        onChange={(v) => setAttributes({ blendMode: v })}
                    />
                    <RangeControl
                        label="Opacity"
                        value={opacity}
                        onChange={(v) => setAttributes({ opacity: v })}
                        min={0}
                        max={100}
                        step={1}
                    />
                </PanelBody>

                <PanelBody title={__('Position (Desktop)', 'blend-wrapper-block')} initialOpen={true}>
                    <UnitControl
                        label="Top"
                        value={positionTop}
                        onChange={(v) => setAttributes({ positionTop: v })}
                    />
                    <UnitControl
                        label="Left"
                        value={positionLeft}
                        onChange={(v) => setAttributes({ positionLeft: v })}
                    />
                    <UnitControl
                        label="Transform X"
                        value={transformX}
                        onChange={(v) => setAttributes({ transformX: v })}
                    />
                    <UnitControl
                        label="Transform Y"
                        value={transformY}
                        onChange={(v) => setAttributes({ transformY: v })}
                    />
                </PanelBody>

                <PanelBody title={__('Position (Mobile)', 'blend-wrapper-block')} initialOpen={false}>
                    <p style={{ fontSize: '12px', color: '#757575' }}>
                        Leer lassen, um Desktop-Werte zu verwenden
                    </p>
                    <UnitControl
                        label="Top"
                        value={positionTopMobile}
                        onChange={(v) => setAttributes({ positionTopMobile: v })}
                    />
                    <UnitControl
                        label="Left"
                        value={positionLeftMobile}
                        onChange={(v) => setAttributes({ positionLeftMobile: v })}
                    />
                    <UnitControl
                        label="Transform X"
                        value={transformXMobile}
                        onChange={(v) => setAttributes({ transformXMobile: v })}
                    />
                    <UnitControl
                        label="Transform Y"
                        value={transformYMobile}
                        onChange={(v) => setAttributes({ transformYMobile: v })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <InnerBlocks />
            </div>
        </>
    );
}
