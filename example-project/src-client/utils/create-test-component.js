import React from 'react';
import { findRenderedComponentWithType, renderIntoDocument } from 'react-dom/test-utils';


export function createTestComponent(TestComponent, props) {
  return findRenderedComponentWithType(
    renderIntoDocument(<TestComponent {...props}/>),
    TestComponent
  );
}
