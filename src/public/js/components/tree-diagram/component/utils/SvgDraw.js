import React from 'react';
import SVG from 'svg.js';

const IconsAndTextLayer = 'iconsAndTextLayer';
const cachedSvgDraws = {};

export const withSvgDraw = Component =>
    class extends React.Component {
        state = {};

        getPrimaryDraw() {
            const { width, height, primaryLayer } = this.props;
            const primaryLayerName = primaryLayer.dataset.name;

            if (primaryLayerName !== IconsAndTextLayer) {
                return SVG(primaryLayer).size(width, height);
            }

            if (cachedSvgDraws[primaryLayerName]) {
                return cachedSvgDraws[primaryLayerName];
            }

            cachedSvgDraws[primaryLayerName] = SVG(primaryLayer).size(
                width,
                height
            );

            return cachedSvgDraws[primaryLayerName];
        }

        componentDidMount() {
            const { width, height, secondaryLayer } = this.props;

            let subState = {
                primaryDraw: this.getPrimaryDraw()
            };

            if (secondaryLayer) {
                subState = {
                    ...subState,
                    secondaryDraw: SVG(secondaryLayer).size(width, height)
                };
            }

            this.setState(subState);
        }

        componentWillUnmount() {
            const { primaryLayer, secondaryLayer } = this.props;

            if (primaryLayer.dataset.name !== IconsAndTextLayer) {
                primaryLayer.removeChild(this.state.primaryDraw.node);
            }

            secondaryLayer &&
                secondaryLayer.removeChild(this.state.secondaryDraw.node);
        }

        render() {
            const { primaryDraw, secondaryDraw } = this.state;

            return (
                (primaryDraw && (
                    <Component
                        {...this.props}
                        primaryDraw={primaryDraw}
                        secondaryDraw={secondaryDraw}
                    />
                )) ||
                null
            );
        }
    };
