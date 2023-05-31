export type TToastType = 'success' | 'error' | 'warning' | undefined;

export interface IToast {
  type: TToastType;
  message: string;
  duration?: number;
}
