export interface FileDropProps {
    fileName: string | null;
    onDrop: React.DragEventHandler<HTMLDivElement>;
    onClick: React.MouseEventHandler<HTMLSpanElement>;
    onRemoveClick: React.MouseEventHandler<HTMLSpanElement>;
}