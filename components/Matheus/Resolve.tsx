export interface Props {
  title?: string;
  count?: number;
}

export default function Resolve({ title, count }: Props) {
  return (
    <div>
      {title}-{count}
    </div>
  );
}
