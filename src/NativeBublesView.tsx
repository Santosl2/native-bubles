import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NativeBublesViewProps } from './NativeBubles.types';

const NativeView: React.ComponentType<NativeBublesViewProps> =
  requireNativeViewManager('NativeBubles');

export default function NativeBublesView(props: NativeBublesViewProps) {
  return <NativeView {...props} />;
}
