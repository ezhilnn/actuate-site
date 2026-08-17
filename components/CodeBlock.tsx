import CopyButton from "./CopyButton";

export default function CodeBlock({
  label,
  code,
  copyText,
}: {
  label?: string;
  code: string;
  copyText?: string;
}) {
  return (
    <div className="code-block">
      <div className="code-block-head">
        <div className="code-block-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="code-block-label">{label ?? "shell"}</span>
        <CopyButton text={copyText ?? code} />
      </div>
      <pre>{code}</pre>
    </div>
  );
}
