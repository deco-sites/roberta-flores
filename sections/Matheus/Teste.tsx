import Notify from "../../components/product/OutOfStock.tsx";
import { useComponent } from "../Component.tsx";

export interface Props {
  title: string;
  count?: number;
}

export default function Teste(props: Props) {
  const { title, count = 0 } = props;

  return (
    <div>
      <h1>{title}</h1>
      <button
        hx-target="closest section"
        hx-swap="beforeend"
        hx-post={useComponent(
          import.meta.resolve("../../components/Matheus/Resolve.tsx"),
          { title: "teste", count: count + 1 },
        )}
      >
        Teste com UseComponent
      </button>
      <Notify productID="1" />
    </div>
  );
}
