export interface Props {
  title: string;
}

export default function Teste(props: Props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
