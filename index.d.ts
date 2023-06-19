declare module "native-bubbles" {
  export function reopenApp(): void;
  export function showFloatingBubble(x?: number, y?: number): void;
  export function hideFloatingBubble(): void;
  export function checkPermission(): void;
  export function requestPermission(): void;
  export function initialize(): void;
}
