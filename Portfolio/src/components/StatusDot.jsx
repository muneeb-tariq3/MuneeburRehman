function StatusDot({ tone = 'completed', pulse = false }) {
  const color = {
    completed: 'status-completed',
    progress: 'status-progress',
    planned: 'status-planned',
  }[tone];

  return <span className={`status-pulse ${color} ${pulse ? '' : 'after:hidden'}`} />;
}

export default StatusDot;