import * as React from 'react';

import { NativeBublesViewProps } from './NativeBubles.types';

export default function NativeBublesView(props: NativeBublesViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
