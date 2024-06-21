interface ParentComponentProps {
  children: React.ReactNode | null; // Type for children prop
}

export function MainModule() {
  return (
    <ParentModule>
      <ChildModule1>1</ChildModule1>
      <ChildModule2>0</ChildModule2>
    </ParentModule>
  );
}

export function ParentModule(props: ParentComponentProps) {
  return <div className="grid grid-cols-[2fr_5fr]">{props.children}</div>;
}

export function ChildModule1(props: ParentComponentProps) {
  return (
    <div className="h-full min-w-80 bg-green-500 grid grid-rows-[1fr_10fr]">
      {props.children}
    </div>
  );
}

export function ChildModule2(props: ParentComponentProps) {
  return <div className="h-full bg-purple-500">{props.children}</div>;
}
