import React from 'react';
import SVG from 'svg.js';
import { buildShiftToPoint } from '../../../../utils/geometry';

const IconsAndTextLayer = 'iconsAndTextLayer';
const cachedSvgDraws = {};

const BOX_SIZE = 800;
const DOT = {
    x: BOX_SIZE / 4,
    y: BOX_SIZE / 4
};

const shiftToCenterPoint = buildShiftToPoint(DOT);

export const withSvgDraw = Component =>
    class extends React.Component {
        state = {};

        createSvg(layer) {
            const { width = BOX_SIZE, height = BOX_SIZE } = this.props;

            return SVG(layer).size(width, height);
        }

        getPrimaryDraw() {
            const { primaryLayer } = this.props;

            const primaryLayerName = primaryLayer.dataset.name;
            if (primaryLayerName !== IconsAndTextLayer) {
                return this.createSvg(primaryLayer);
            }

            if (cachedSvgDraws[primaryLayerName]) {
                return cachedSvgDraws[primaryLayerName];
            }

            cachedSvgDraws[primaryLayerName] = this.createSvg(primaryLayer);
            return cachedSvgDraws[primaryLayerName];
        }

        componentDidMount() {
            const { secondaryLayer } = this.props;

            let subState = {
                primaryDraw: this.getPrimaryDraw()
            };

            if (secondaryLayer) {
                subState = {
                    ...subState,
                    secondaryDraw: this.createSvg(secondaryLayer)
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
                        shiftToCenterPoint={shiftToCenterPoint}
                    />
                )) ||
                null
            );
        }
    };
