import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <div
        className="h-full bg-blue-600 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
