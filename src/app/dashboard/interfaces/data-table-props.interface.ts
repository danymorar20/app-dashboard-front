export interface DateTableProps<T> {
    headers: string[];
    data: T[];
    map: { [key: string]: keyof T };
    actions?: Array<{ label: string; icon: JSX.Element; onClick: (item: T) => void }>; // Acciones opcionales
  }
