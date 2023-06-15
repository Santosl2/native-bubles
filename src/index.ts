import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NativeBubles.web.ts
// and on native platforms to NativeBubles.ts
import NativeBublesModule from './NativeBublesModule';
import NativeBublesView from './NativeBublesView';
import { ChangeEventPayload, NativeBublesViewProps } from './NativeBubles.types';

// Get the native constant value.
export const PI = NativeBublesModule.PI;

export function hello(): string {
  return NativeBublesModule.hello();
}

export async function setValueAsync(value: string) {
  return await NativeBublesModule.setValueAsync(value);
}

const emitter = new EventEmitter(NativeBublesModule ?? NativeModulesProxy.NativeBubles);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NativeBublesView, NativeBublesViewProps, ChangeEventPayload };
