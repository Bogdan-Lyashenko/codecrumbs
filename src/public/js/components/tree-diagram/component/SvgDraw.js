import React from 'react';
import SVG from 'svg.js';

export const withSvgDraw = Component =>
    class extends React.Component {
        state = {};

        componentDidMount() {
            const { width, height, primaryLayer, secondaryLayer } = this.props;

            let subState = {
                primaryDraw: SVG(primaryLayer).size(width, height)
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

            primaryLayer.removeChild(this.state.primaryDraw.node);
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
