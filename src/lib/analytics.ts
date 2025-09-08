/**
 * No-op analytics stub to keep bundle small.
 * You can later wire this to a real provider.
 */
export function init() {
  if (typeof window === 'undefined') return;
  // Example: warmup or queue stub
  // console.debug('[analytics] init');
}

export function track(_event: string, _payload?: Record<string, unknown>) {
  // console.debug('[analytics] track', _event, _payload);
}
