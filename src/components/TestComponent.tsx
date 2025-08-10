interface TestComponentProps {
  message: string;
}

export function TestComponent({ message }: TestComponentProps) {
  return <div className="text-blue-500">{message}</div>;
}
