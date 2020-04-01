interface WorkFlowCallback {
  back?: () => void;
  next: (response: any) => any;
  screenId?: string;
}

export type StepCallback = WorkFlowCallback;
