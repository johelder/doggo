export type TToastType = 'success' | 'error' | 'warning' | undefined;

export interface IToast {
  id?: number;
  type: TToastType;
  message: string;
  duration?: number;
}
