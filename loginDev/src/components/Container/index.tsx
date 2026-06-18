import estilos from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className={estilos.container}>
        <div className={estilos.content}>{children}</div>
      </div>
    </>
  );
}
