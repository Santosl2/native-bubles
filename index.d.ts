declare module "native-bubbles" {
  export function reopenApp(): void;
  export function showFloatingBubble(x?: number, y?: number): Promise<void>;
  export function hideFloatingBubble(): Promise<void>;
  export function checkPermission(): Promise<void>;
  export function requestPermission(): Promise<void>;
  export function initialize(): Promise<void>;
}
